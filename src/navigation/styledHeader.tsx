import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
  padding: 4px 20px;
  font-family: sans-serif;
  width: 167vh;
  margin-left: 230px;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 2px;
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 12px;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  margin-left: 15px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const AccountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 8px;
  transition:
    background 160ms ease,
    transform 120ms ease;
  &:hover {
    background: rgba(255, 255, 255, 0.02);
    transform: translateY(-2px);
  }
`;

export const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  background: #ddd;
`;
