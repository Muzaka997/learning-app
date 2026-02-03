import { useState, useEffect } from "react";
import authApi from "./authApi";
import { AuthContext } from "./context";
import type { User } from "./types";
import { setAuthToken } from "./token";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // --------- Separate function to fetch current user ---------
  const fetchCurrentUser = async (): Promise<User | null> => {
    const token = localStorage.getItem("token");
    if (token) setAuthToken(token);

    try {
      const res = await authApi.get("/auth/me");
      setUser(res.data.data); // <-- sets user state
      return res.data.data;
    } catch (error) {
      console.error("Failed to fetch current user:", error);
      setUser(null);
      return null;
    } finally {
      setLoading(false); // stop loading in any case
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await authApi.post("/auth/login", { email, password });
    const token = res.data.token;
    if (token) {
      localStorage.setItem("token", token);
      setAuthToken(token);
    }

    await fetchCurrentUser(); // automatically sets user state
  };

  const register = async (name: string, email: string, password: string) => {
    const res = await authApi.post("/auth/register", { name, email, password });
    const token = res.data.token;
    if (token) {
      localStorage.setItem("token", token);
      setAuthToken(token);
    }

    await fetchCurrentUser(); // automatically sets user state
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setAuthToken(); // remove header
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        register,
        logout,
        fetchCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
