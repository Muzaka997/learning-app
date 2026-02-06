import styled from "styled-components";

export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FileButton = styled.label`
  background: rgba(255, 255, 255, 0.04);
  color: ${(p) => p.theme.text};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 10px 14px;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-1px);
  }
`;

export const FileName = styled.span`
  color: ${(p) => p.theme.text};
  opacity: 0.8;
  font-size: 0.92rem;
`;

export const SubmitButton = styled.button`
  background: ${(p) => p.theme.buttonBackground};
  color: ${(p) => p.theme.buttonText};
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 16px;
  border-radius: 10px;
  font-weight: 600;
  transition:
    background 0.2s ease,
    transform 0.15s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ClearButton = styled.button`
  background: rgba(255, 255, 255, 0.04);
  color: ${(p) => p.theme.text};
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 14px;
  border-radius: 10px;
  transition:
    background 0.2s ease,
    transform 0.15s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Preview = styled.div`
  margin-top: 0.5rem;
`;

export const PreviewImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
`;
