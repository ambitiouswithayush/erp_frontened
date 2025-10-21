import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type UserRole = "superadmin" | "admin" | "staff" | "student" | null;

interface AuthContextType {
  user: UserRole;
  login: (role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserRole>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user_role") as UserRole;
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (role: UserRole) => {
    setUser(role);
    if (role) {
      localStorage.setItem("user_role", role);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_role");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
