import styled from "styled-components";

export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const FileRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FileButton = styled.label`
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;
  color: ${(p) => p.theme.heading};
  background: transparent;
  border: 1px solid ${(p) => p.theme.inputBorder};
  transition:
    background 0.16s ease,
    border-color 0.16s ease;

  &:hover {
    background: color-mix(in srgb, ${(p) => p.theme.accent} 8%, transparent);
    border-color: color-mix(in srgb, ${(p) => p.theme.accent} 35%, transparent);
  }
`;

export const FileName = styled.span`
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(p) => p.theme.textMuted};
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  padding: 12px 22px;
  border: none;
  border-radius: 12px;
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  background: ${(p) => p.theme.accent};
  box-shadow: 0 12px 30px -14px ${(p) => p.theme.accent};
  transition:
    filter 0.16s ease,
    transform 0.16s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const ClearButton = styled.button`
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;
  color: ${(p) => p.theme.textMuted};
  background: transparent;
  border: 1px solid transparent;
  transition:
    background 0.16s ease,
    color 0.16s ease;

  &:hover:not(:disabled) {
    background: ${(p) => p.theme.hoverFill};
    color: ${(p) => p.theme.heading};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Preview = styled.div`
  margin-top: 4px;
`;

export const PreviewImage = styled.img`
  width: 132px;
  height: 132px;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid ${(p) => p.theme.cardBorder};
  box-shadow: ${(p) => p.theme.cardShadow};
`;
