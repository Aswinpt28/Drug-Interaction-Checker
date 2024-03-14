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
import Consultation from "./Pages/Admin/Meetings";
import UserManagement from "./Pages/Admin/User";
import DatabaseManagement from "./Pages/Admin/Doctors";
import { AuthProvider } from "./components/AuthContect";
import Medicine from "./Pages/Admin/Medicine";
import Appointment from "./Pages/User/Appointment";
import HomePage from "./Pages/Doctor/Homep";
import PatientList from "./Pages/Doctor/patientList";
import Profile from "./Pages/User/profile";

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
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newdrugs" element={<NewDrugs />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/doctors" element={<DatabaseManagement />} />
          <Route path="/user" element={<UserManagement />} />
          <Route path="/meetings" element={<Consultation />} />
          <Route path="/admindash" element={<AdminDashboard />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/homep" element={<HomePage />} />
          <Route path="/patient" element={<PatientList />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
