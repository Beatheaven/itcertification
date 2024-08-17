import { removeCookie } from "typescript-cookie";
import { useNavigate } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import LoadingScreen from "../components/Elements/Loading/LoadingScreen";

const LayoutDashboard = React.lazy(() => import("../components/Layouts/LayoutDashboard"));

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard | IT Certification";
  }, []);
  const navigate = useNavigate();
  const handleLogOut = () => {
    removeCookie("@token");
    removeCookie("@userLogin");
    navigate("/");
  };
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LayoutDashboard>
        <div className="bg-[#F4F4F4] h-screen flex justify-center items-center">
          <h1>Welcome to dashboard</h1>
          <button type="button" onClick={handleLogOut} className="bg-[#A51525] p-3">
            Logout
          </button>
        </div>
      </LayoutDashboard>
    </Suspense>
  );
}
