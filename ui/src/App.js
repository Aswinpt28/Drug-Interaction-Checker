import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./Pages/AuthForm";
import Home from "./Pages/Home";
import Admin from "./Pages/AdminForm";
import Interaction from "./Pages/Interaction";
import Sideeffects from "./Pages/Sideeffects";
import Pill from "./Pages/Pill";
import NewDrugs from "./Pages/NewDrugs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<AuthForm />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/check" element={<Interaction />} />
        <Route path="/side" element={<Sideeffects />} />
        <Route path="/pill" element={<Pill />} />
        <Route path="/newdrugs" element={<NewDrugs />} />
      </Routes>
    </Router>
  );
};

export default App;
