import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Superadmin has access to all routes
  if (user === "superadmin") {
    return <>{children}</>;
  }

  if (allowedRoles && user && !allowedRoles.includes(user)) {
    return <Navigate to={`/dashboard/${user}`} replace />;
  }

  return <>{children}</>;
}
