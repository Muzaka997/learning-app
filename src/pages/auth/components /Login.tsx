import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth";
import ThemeButton from "../../../theme/ThemeButton";
import {
  AuthBrand,
  AuthCard,
  AuthForm,
  AuthScreen,
  BrandMark,
  BrandName,
  BrandRow,
  BrandTagline,
  BrandText,
  ErrorText,
  EyeButton,
  Field,
  FieldWrap,
  Form,
  FormEyebrow,
  FormTitle,
  Label,
  PrimaryButton,
  Quote,
  SecondaryButton,
  ThemeFixed,
} from "./StyledLogin";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
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
    if (e) e.preventDefault();
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
    <AuthScreen>
      <ThemeFixed>
        <ThemeButton />
      </ThemeFixed>

      <AuthCard>
        <AuthBrand>
          <BrandRow>
            <BrandMark>
              <AutoStoriesIcon />
            </BrandMark>
            <BrandText>
              <BrandName>Learning App</BrandName>
              <BrandTagline>Read. Learn. Reflect.</BrandTagline>
            </BrandText>
          </BrandRow>
          <Quote>
            <p className="quote">
              “A reader lives a thousand lives before he dies.”
            </p>
            <p className="cite">— GEORGE R.R. MARTIN</p>
          </Quote>
        </AuthBrand>

        <AuthForm>
          <FormEyebrow>Welcome back!</FormEyebrow>
          <FormTitle>Sign into your account</FormTitle>

          <Form onSubmit={handleSubmit}>
            <Label htmlFor="login-email">Email</Label>
            <FieldWrap>
              <EmailIcon />
              <Field
                id="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </FieldWrap>

            <Label htmlFor="login-password">Password</Label>
            <FieldWrap>
              <LockIcon />
              <Field
                id="login-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{ paddingRight: 44 }}
              />
              <EyeButton
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </EyeButton>
            </FieldWrap>

            {error && <ErrorText>{error}</ErrorText>}

            <PrimaryButton type="submit">Login</PrimaryButton>
            <SecondaryButton type="button" onClick={createAcc}>
              Create new account
            </SecondaryButton>
          </Form>
        </AuthForm>
      </AuthCard>
    </AuthScreen>
  );
}
