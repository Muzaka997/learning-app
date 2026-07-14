import React from "react";
import { useAuth } from "../auth/useAuth";
import UploadPhoto from "./components/upload";

import {
  Page,
  Card,
  Title,
  InfoRow,
  AvatarWrapper,
  Avatar,
  AvatarFallback,
  UploadSection,
} from "./profile.styled";

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <p>You must be logged in to view this page.</p>;

  const initial = (user.name?.trim()?.[0] || "?").toUpperCase();

  return (
    <Page>
      <Card>
        <Title>Profile</Title>

        <AvatarWrapper>
          {user.profilePhoto ? (
            <Avatar src={user.profilePhoto} alt={user.name || "Profile"} />
          ) : (
            <AvatarFallback>{initial}</AvatarFallback>
          )}
        </AvatarWrapper>

        <InfoRow>
          <span className="label">Name</span>
          <span className="value">{user.name}</span>
        </InfoRow>

        <InfoRow>
          <span className="label">Email</span>
          <span className="value">{user.email}</span>
        </InfoRow>

        <UploadSection>
          <p className="upload-heading">Update profile photo</p>
          <UploadPhoto />
        </UploadSection>
      </Card>
    </Page>
  );
};

export default Profile;
