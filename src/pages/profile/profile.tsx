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
  UploadSection,
} from "./profile.styled";

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <p>You must be logged in to view this page.</p>;

  return (
    <Page>
      <Card>
        <Title>Profile</Title>

        <InfoRow>
          <strong>Name:</strong> {user.name}
        </InfoRow>

        <InfoRow>
          <strong>Email:</strong> {user.email}
        </InfoRow>

        <AvatarWrapper>
          <Avatar
            src={user.profilePhoto || "/default-avatar.png"}
            alt="Profile"
          />
        </AvatarWrapper>

        <UploadSection>
          <UploadPhoto />
        </UploadSection>
      </Card>
    </Page>
  );
};

export default Profile;
