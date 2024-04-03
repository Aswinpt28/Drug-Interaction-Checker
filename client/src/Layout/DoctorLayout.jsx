import React from "react";
import { Outlet } from "react-router-dom";

const DoctorLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default DoctorLayout;
