import { getCookie } from "typescript-cookie";
import { Navigate, RouteProps } from "react-router-dom";
import { ReactNode } from "react";

// interface PrivateRouteProps extends RouteProps {
//   children: ReactNode;
// }

interface myProps {
  children: ReactNode;
}

export default function ProtectedRouteAfterLogin({ children }: myProps) {
  if (getCookie("@token")) {
    return <Navigate to="/Dashboard" />;
  }
  return children;
}
