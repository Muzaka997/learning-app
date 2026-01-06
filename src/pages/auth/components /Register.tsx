import { Button, TextField, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState(""); // New state for repeat password
  const [passwordError, setPasswordError] = useState(""); // State to handle error message

  const handleSubmit = async () => {
    if (password !== repeatPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError(""); // Reset error if passwords match

    await register(name, email, password);
    navigate("/");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" mb={2}>
        Register
      </Typography>

      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextField
        label="Repeat Password"
        type="password"
        fullWidth
        margin="normal"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        error={!!passwordError} // Show error if passwords don't match
        helperText={passwordError} // Show the error message
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Register
      </Button>
    </Box>
  );
}
