import styled from "styled-components";

export const Page = styled.div`
  max-height: 90vh;
  padding-top: 2rem;
  background: white;
  display: flex;
  position: relative;

  /* align-items: center; */
  /* justify-content: center; */
`;

export const Card = styled.div`
  background: grey;
  padding: 2.5rem;
  border-radius: 16px;
  width: 100%;
  max-width: 420px;
  color: black;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const InfoRow = styled.p`
  color: black;
  margin: 0.5rem 0;
  font-size: 0.95rem;

  strong {
    color: #94a3b8;
    margin-right: 0.5rem;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
`;

export const Avatar = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 14px;
  border: 3px solid #1e293b;
`;

export const UploadSection = styled.div`
  margin-top: 1.5rem;
  border-top: 1px solid #1e293b;
  padding-top: 1.5rem;
`;
