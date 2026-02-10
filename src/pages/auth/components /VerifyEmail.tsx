import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import authApi from "../authApi";
import { setAuthToken } from "../token";
import { useAuth } from "../useAuth";

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

export default function VerifyEmail() {
  const query = useQuery();
  const navigate = useNavigate();
  const { fetchCurrentUser } = useAuth();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const token = query.get("token");
    if (!token) {
      setStatus("error");
      setError("Missing verification token.");
      return;
    }

    (async () => {
      try {
        const res = await authApi.get(`/auth/verifyemail/${token}`);
        const authToken = res.data?.token;
        if (authToken) {
          localStorage.setItem("token", authToken);
          setAuthToken(authToken);
          await fetchCurrentUser();
        }
        setStatus("success");
      } catch (e: any) {
        const msg =
          e?.response?.data?.error || e?.message || "Verification failed.";
        setError(msg);
        setStatus("error");
      }
    })();
  }, []);

  return (
    <Box sx={{ maxWidth: 520, mx: "auto", mt: 8, textAlign: "center" }}>
      {status === "loading" && (
        <>
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Verifying your email…</Typography>
        </>
      )}
      {status === "success" && (
        <>
          <Typography variant="h4" gutterBottom>
            Email verified
          </Typography>
          <Typography gutterBottom>
            Your account is now active. You can continue to the app.
          </Typography>
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            onClick={() => navigate("/")}
          >
            Go to app
          </Button>
        </>
      )}
      {status === "error" && (
        <>
          <Typography variant="h5" color="error" gutterBottom>
            Verification failed
          </Typography>
          <Typography gutterBottom>{error}</Typography>
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            onClick={() => navigate("/login")}
          >
            Back to login
          </Button>
        </>
      )}
    </Box>
  );
}
