import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { makeRequest } from "../Axios";

const UserLayout = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    makeRequest.get("/auth/logout").then(() => {
      setUser(null);
      navigate("/login");
    });
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/login");
  };
  return (
    <div>
      <Navbar
        isAuthenticated={user}
        handleLogout={handleLogout}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
