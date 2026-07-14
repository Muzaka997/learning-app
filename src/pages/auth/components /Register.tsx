import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth";
import ThemeButton from "../../../theme/ThemeButton";
import {
  AuthBrand,
  AuthCard,
  AuthForm,
  AuthScreen,
  BackLink,
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
  FormTitle,
  Label,
  PrimaryButton,
  Quote,
  ThemeFixed,
} from "./StyledLogin";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (password !== repeatPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");
    await register(name, email, password);
    navigate("/");
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
          <BackLink type="button" onClick={() => navigate("/login")}>
            ← Previous page
          </BackLink>
          <FormTitle>Register</FormTitle>

          <Form onSubmit={handleSubmit}>
            <Label htmlFor="reg-name">Name</Label>
            <FieldWrap>
              <PersonIcon />
              <Field
                id="reg-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
              />
            </FieldWrap>

            <Label htmlFor="reg-email">Email</Label>
            <FieldWrap>
              <EmailIcon />
              <Field
                id="reg-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </FieldWrap>

            <Label htmlFor="reg-password">Password</Label>
            <FieldWrap>
              <LockIcon />
              <Field
                id="reg-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
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

            <Label htmlFor="reg-repeat">Repeat Password</Label>
            <FieldWrap>
              <LockIcon />
              <Field
                id="reg-repeat"
                type={showPassword ? "text" : "password"}
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder="Repeat password"
              />
            </FieldWrap>

            {passwordError && <ErrorText>{passwordError}</ErrorText>}

            <PrimaryButton type="submit">Register</PrimaryButton>
          </Form>
        </AuthForm>
      </AuthCard>
    </AuthScreen>
  );
}
