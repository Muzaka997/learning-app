import { useState, type ChangeEvent, type FormEvent } from "react";
import { useAuth } from "../../auth/useAuth";

const UploadPhoto: React.FC = () => {
  const { user, setUser } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0])); // preview
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file || !user)
      return alert("Please select a file and ensure you are logged in");

    setLoading(true);

    const formData = new FormData();
    formData.append("photo", file);

    try {
      const res = await fetch(
        `http://localhost:5001/api/v1/users/${user._id}/photo`,
        {
          method: "PUT",
          body: formData,
          credentials: "include", // if using cookie JWT
        }
      );

      const data: { success: boolean; imageUrl?: string; error?: string } =
        await res.json();

      if (!res.ok || !data.success)
        throw new Error(data.error || "Upload failed");

      setImageUrl(`http://localhost:5001${data.imageUrl}`);

      if (user) {
        setUser({ ...user, profilePhoto: data.imageUrl });
      }

      alert("Photo uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Error uploading file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>

      {imageUrl && (
        <div style={{ marginTop: "1rem" }}>
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ width: "200px", borderRadius: "8px" }}
          />
        </div>
      )}
    </form>
  );
};

export default UploadPhoto;
