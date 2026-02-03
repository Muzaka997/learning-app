interface iTestResult {
  test: string; // test id (ObjectId as string)
  score?: number;
  passed?: boolean;
  takenAt?: Date;
  submitted?: boolean;
}

export type User = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "publisher";
  profilePhoto?: string;
  testResults?: iTestResult[];
};

export type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchCurrentUser: () => Promise<User | null>;
};
