import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer2";
import { AuthContext } from "../Context/AuthContext";
import { makeRequest } from "../Axios";

const UserLayout = () => {
  const navigate = useNavigate;
  const { user, setUser } = useContext(AuthContext);

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
    navigate("/signup");
  };

  return (
    <>
      <Navbar
        isAuthenticated={user}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
        handleLogout={handleLogout}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
