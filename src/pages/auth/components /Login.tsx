import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth";
import {
  IconRight,
  IconWrapper,
  InputWrapper,
  StyledBox,
  StyledH,
  StyledInput,
  StyledWelcome,
} from "./StyledLogin";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const createAcc = () => {
    navigate("/register");
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault(); // prevent page reload
    try {
      await login(email, password);
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) console.error(err.message);
      else console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <StyledBox>
      <p>Welcome!</p>
      <StyledWelcome>Sign into your account</StyledWelcome>

      {/* Wrap inputs in a form to handle Enter */}
      <form onSubmit={handleSubmit}>
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

        {error && <Typography color="error">{error}</Typography>}

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          type="submit" // <--- important for Enter key
        >
          Login
        </Button>
        <Button onClick={createAcc} fullWidth>
          Create New Account
        </Button>
      </form>
    </StyledBox>
  );
}
