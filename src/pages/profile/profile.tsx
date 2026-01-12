import React from "react";
import { useAuth } from "../auth/useAuth";
import UploadPhoto from "./components/upload";

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <p>You must be logged in to view this page.</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <img
        src={
          user.profilePhoto
            ? `http://localhost:5001${user.profilePhoto}`
            : "/default-avatar.png"
        }
        alt="Profile"
        style={{ width: "200px", borderRadius: "8px" }}
      />

      <UploadPhoto />
    </div>
  );
};

export default Profile;
