import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CheckEmail() {
  const navigate = useNavigate();
  return (
    <Box sx={{ maxWidth: 480, mx: "auto", mt: 6, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Verify your email
      </Typography>
      <Typography gutterBottom>
        We sent a verification link to your email. Please open it to activate
        your account.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        If you don’t see the email, check your spam folder.
      </Typography>
      <Button
        sx={{ mt: 3 }}
        variant="contained"
        onClick={() => navigate("/login")}
      >
        Back to login
      </Button>
    </Box>
  );
}
