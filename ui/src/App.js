import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./Pages/User/AuthForm";
import Home from "./Pages/User/Home";
import Admin from "./Pages/Admin/AdminForm";
import Interaction from "./Pages/User/Interaction";
import Sideeffects from "./Pages/User/Sideeffects";
import Pill from "./Pages/User/Pill";
import NewDrugs from "./Pages/User/NewDrugs";
import Details from "./Pages/User/MedicineDetailsPage";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Consultation from "./Pages/Admin/Consultation";
import UserManagement from "./Pages/Admin/UserManagement";
import DatabaseManagement from "./Pages/Admin/DatabaseManagement";
import { AuthProvider } from "./components/AuthContect";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<AuthForm />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/check" element={<Interaction />} />
          <Route path="/side" element={<Sideeffects />} />
          <Route path="/pill" element={<Pill />} />
          <Route path="/newdrugs" element={<NewDrugs />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/database-management" element={<DatabaseManagement />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/admindash" element={<AdminDashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
