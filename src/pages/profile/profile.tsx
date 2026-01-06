import React from "react";
import { useAuth } from "../auth/useAuth";
import {
  StyledInfo,
  StyledName,
  StyledProfileContainer,
} from "./profile.styled";

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>You must be logged in to view this page.</p>;
  }

  return (
    <StyledProfileContainer $darkMode={false}>
      <StyledName>Profile</StyledName>

      <StyledInfo>
        <strong>Name:</strong> {user.name}
      </StyledInfo>

      <StyledInfo>
        <strong>Email:</strong> {user.email}
      </StyledInfo>
    </StyledProfileContainer>
  );
};

export default Profile;
