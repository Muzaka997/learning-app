import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
  color: white;
  padding: 10px 20px;
  font-family: sans-serif;
  width: 165vh;

  margin-left: 230px;
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
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
  margin-left: 55px;
`;

export const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  background: #ddd;
`;
