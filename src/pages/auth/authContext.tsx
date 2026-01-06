import React, { useEffect, useState } from "react";
import authApi from "./authApi";
import { AuthContext } from "./context";
import type { User } from "./types";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authApi
      .get("/auth/me")
      .then((res) => setUser(res.data.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    await authApi.post("/auth/login", { email, password });
    const res = await authApi.get("/auth/me");
    setUser(res.data.data);
  };

  const register = async (name: string, email: string, password: string) => {
    await authApi.post("/auth/register", { name, email, password });
    const res = await authApi.get("/auth/me");
    setUser(res.data.data);
  };

  const logout = async () => {
    await authApi.get("/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
