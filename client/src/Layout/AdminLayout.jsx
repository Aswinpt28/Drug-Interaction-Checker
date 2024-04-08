import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { makeRequest } from "../Axios";
import { AuthContext } from "../Context/AuthContext";

const AdminLayout = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    makeRequest.get("/auth/logout").then(() => {
      setUser(null);
      navigate("/login");
    });
  };

  return (
    <>
      <Sidebar handleLogout={handleLogout} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
