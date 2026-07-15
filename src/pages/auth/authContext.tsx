import { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { AuthContext } from "./context";
import type { User } from "./types";
import { apolloClient } from "../../apollo/client";

// Shared user selection (aliases GraphQL `id` to `_id` to match the User type)
const ME_QUERY = gql`
  query Me {
    me {
      _id: id
      name
      email
      role
      profilePhoto
      testResults {
        test
        score
        passed
        submitted
        takenAt
      }
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id: id
        name
        email
        role
        profilePhoto
        testResults {
          test
          score
          passed
          submitted
          takenAt
        }
      }
    }
  }
`;

const REGISTER_MUTATION = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      user {
        _id: id
        name
        email
        role
        profilePhoto
        testResults {
          test
          score
          passed
          submitted
          takenAt
        }
      }
    }
  }
`;

type MeData = { me: User | null };
type AuthData = { token: string; user: User };

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // --------- Fetch current user via the `me` query ---------
  const fetchCurrentUser = async (): Promise<User | null> => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      setLoading(false);
      return null;
    }

    try {
      const { data } = await apolloClient.query<MeData>({
        query: ME_QUERY,
        fetchPolicy: "network-only",
      });
      setUser(data?.me ?? null);
      return data?.me ?? null;
    } catch (error) {
      console.error("Failed to fetch current user:", error);
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const login = async (email: string, password: string) => {
    const { data } = await apolloClient.mutate<{ login: AuthData }>({
      mutation: LOGIN_MUTATION,
      variables: { email, password },
    });
    if (data?.login?.token) {
      localStorage.setItem("token", data.login.token);
    }
    setUser(data?.login?.user ?? null);
  };

  const register = async (name: string, email: string, password: string) => {
    const { data } = await apolloClient.mutate<{ register: AuthData }>({
      mutation: REGISTER_MUTATION,
      variables: { name, email, password },
    });
    if (data?.register?.token) {
      localStorage.setItem("token", data.register.token);
    }
    setUser(data?.register?.user ?? null);
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setUser(null);
    // Drop any user-scoped cached data
    await apolloClient.clearStore().catch(() => {});
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
