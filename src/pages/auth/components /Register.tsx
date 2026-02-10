import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";
import {
  IconRight,
  IconWrapper,
  InputWrapper,
  StyledBox,
  StyledH,
  StyledInput,
  StyledWelcome,
} from "./StyledLogin";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState(""); // New state for repeat password
  const [passwordError, setPasswordError] = useState(""); // State to handle error message
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (password !== repeatPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError(""); // Reset error if passwords match

    await register(name, email, password);
    navigate("/check-email");
  };

  const goPrevPage = () => {
    navigate("/login");
  };

  return (
    <>
      <StyledBox>
        <Button
          variant="text"
          fullWidth
          sx={{ mt: 2, justifyContent: "flex-start" }}
          onClick={goPrevPage}
        >
          Previous Page
        </Button>
        <StyledWelcome>Register</StyledWelcome>
        <form onSubmit={handleSubmit}>
          <StyledH>Name</StyledH>
          <InputWrapper>
            <IconWrapper>
              <PersonIcon></PersonIcon>
            </IconWrapper>
            <StyledInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </InputWrapper>
          <StyledH>Email</StyledH>
          <InputWrapper>
            <IconWrapper>
              <EmailIcon />
            </IconWrapper>
            <StyledInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </InputWrapper>
          <StyledH>Password</StyledH>
          <InputWrapper>
            <IconWrapper>
              <PasswordIcon />
            </IconWrapper>
            <StyledInput
              type={showPassword ? "text" : "password"} // toggle visibility
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <IconRight onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconRight>
          </InputWrapper>
          <StyledH>Repeat Password</StyledH>
          <InputWrapper>
            <IconWrapper>
              <PasswordIcon />
            </IconWrapper>
            <StyledInput
              type={showPassword ? "text" : "password"} // toggle visibility
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Repeat password"
            />
            <IconRight onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconRight>
          </InputWrapper>
          {passwordError && (
            <Typography color="error">{passwordError}</Typography>
          )}
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => handleSubmit()}
          >
            Register
          </Button>
        </form>
      </StyledBox>
    </>
  );
}
