import styled from "styled-components";

export const Page = styled.div`
  min-height: calc(100vh - 80px);
  max-height: 90vh;
  padding: 2.5rem 1.5rem;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  position: relative;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 2.25rem;
  border-radius: 20px;
  color: ${(p) => p.theme.text};
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.02)
    )
    ${(p) => p.theme.background};
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.25rem;
  text-align: center;
  font-weight: 800;
  letter-spacing: 0.2px;
`;

export const InfoRow = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: ${(p) => p.theme.text};
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  font-size: 0.98rem;
  border-radius: 10px;

  strong {
    color: #9fb3c8;
    font-weight: 700;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1rem;
  position: relative;
`;

export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  border: 0;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.35),
    0 0 0 4px rgba(255, 255, 255, 0.06);
  outline: 3px solid rgba(255, 255, 255, 0.06);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const UploadSection = styled.div`
  margin-top: 1.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1.25rem;

  form {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  input[type="file"] {
    color: ${(p) => p.theme.text};
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 10px 12px;
    border-radius: 10px;
  }

  button[type="submit"] {
    background: ${(p) => p.theme.buttonBackground};
    color: ${(p) => p.theme.buttonText};
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
`;
