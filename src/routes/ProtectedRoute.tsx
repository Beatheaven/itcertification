import { getCookie } from "typescript-cookie";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface myProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: myProps) {
  if (!getCookie("@token")) {
    return <Navigate to="/login" />;
  }
  return children;
}
