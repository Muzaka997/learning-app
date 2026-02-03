import { createContext } from "react";
import type { AuthContextType } from "./types";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  fetchCurrentUser: async () => null,
});
