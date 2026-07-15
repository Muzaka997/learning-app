import { useState, type ChangeEvent, type FormEvent } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useAuth } from "../../auth/useAuth";
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

const UPLOAD_PHOTO = gql`
  mutation UploadProfilePhoto($userId: ID!, $file: Upload!) {
    uploadProfilePhoto(userId: $userId, file: $file) {
      success
      imageUrl
    }
  }
`;

interface UploadPhotoData {
  uploadProfilePhoto: { success: boolean; imageUrl: string | null };
}

const UploadPhoto: React.FC = () => {
  const { user, setUser } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploadPhoto, { loading }] = useMutation<UploadPhotoData>(UPLOAD_PHOTO);
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

    try {
      // Passing the File as a variable triggers a GraphQL multipart request.
      const { data } = await uploadPhoto({
        variables: { userId: user._id, file },
      });

      const payload = data?.uploadProfilePhoto;
      if (!payload?.success) throw new Error("Upload failed");

      // Server returns a full secure_url from Cloudinary
      setImageUrl(null);
      setUser({ ...user, profilePhoto: payload.imageUrl || undefined });

      alert("Photo uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Error uploading file");
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
