import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";
import BackendDesc from "../pages/BackendDesc.tsx";
import FrontEndDesc from "../pages/FrontEndDesc.tsx";
import QADesc from "../pages/QADesc.tsx";
import CertifiicateValidation from "../pages/CertifiicateValidation.tsx";
import UIUXDesc from "../pages/UIUXDesc.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import ProtectedRoute from "../routes/ProtectedRoute.tsx";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRouteAfterLogin from "./ProtextedRouteAfterLogin.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouteAfterLogin>
        <Home />
      </ProtectedRouteAfterLogin>
    ),
  },
  {
    path: "/backend-description",
    element: (
      <ProtectedRouteAfterLogin>
        <BackendDesc />
      </ProtectedRouteAfterLogin>
    ),
  },
  {
    path: "/frontend-description",
    element: (
      <ProtectedRouteAfterLogin>
        <FrontEndDesc />
      </ProtectedRouteAfterLogin>
    ),
  },
  {
    path: "/quality-assurance-description",
    element: (
      <ProtectedRouteAfterLogin>
        <QADesc />
      </ProtectedRouteAfterLogin>
    ),
  },
  {
    path: "/uiux-design-description",
    element: (
      <ProtectedRouteAfterLogin>
        <UIUXDesc />
      </ProtectedRouteAfterLogin>
    ),
  },
  {
    path: "/certificate-validation",
    element: (
      <ProtectedRouteAfterLogin>
        <CertifiicateValidation />
      </ProtectedRouteAfterLogin>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);
