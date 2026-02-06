import { useState, type ChangeEvent, type FormEvent } from "react";
import { useAuth } from "../../auth/useAuth";
import config from "../../../config";
import {
  UploadForm,
  FileRow,
  HiddenFileInput,
  FileButton,
  FileName,
  SubmitButton,
  ClearButton,
  Preview,
  PreviewImage,
} from "./Upload.styled";
import { useEffect, useRef } from "react";

const UploadPhoto: React.FC = () => {
  const { user, setUser } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // cleanup object URL on unmount
  useEffect(() => {
    return () => {
      if (imageUrl && imageUrl.startsWith("blob:")) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      // revoke previous preview if it was a blob
      if (imageUrl && imageUrl.startsWith("blob:")) {
        URL.revokeObjectURL(imageUrl);
      }
      setFile(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0])); // preview
    }
  };

  const handleClear = () => {
    if (imageUrl && imageUrl.startsWith("blob:")) {
      URL.revokeObjectURL(imageUrl);
    }
    setFile(null);
    setImageUrl(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file || !user)
      return alert("Please select a file and ensure you are logged in");

    setLoading(true);

    const formData = new FormData();
    formData.append("photo", file);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${config.apiBaseURL}/users/${user._id}/photo`, {
        method: "PUT",
        body: formData,
        credentials: "include", // send cookie if present
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });

      const data: { success: boolean; imageUrl?: string; error?: string } =
        await res.json();

      if (!res.ok || !data.success)
        throw new Error(data.error || "Upload failed");

      // Server returns a full secure_url from Cloudinary
      setImageUrl(null);

      if (user) {
        setUser({ ...user, profilePhoto: data.imageUrl || undefined });
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
    <UploadForm onSubmit={handleSubmit}>
      <FileRow>
        <HiddenFileInput
          id="profile-photo"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={inputRef}
        />
        <FileButton htmlFor="profile-photo">Choose photo</FileButton>
        {file && <FileName>{file.name}</FileName>}
        {file && (
          <ClearButton type="button" onClick={handleClear}>
            Remove
          </ClearButton>
        )}
        <SubmitButton type="submit" disabled={loading || !file}>
          {loading ? "Uploading..." : "Upload"}
        </SubmitButton>
      </FileRow>

      {imageUrl && (
        <Preview>
          <PreviewImage src={imageUrl} alt="Uploaded preview" />
        </Preview>
      )}
    </UploadForm>
  );
};

export default UploadPhoto;
