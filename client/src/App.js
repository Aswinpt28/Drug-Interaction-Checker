import React, { useContext, useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AuthForm from "./Pages/User/AuthForm";
import Home from "./Pages/User/Home";
import AdminF from "./Pages/Admin/AdminForm";
import Interaction from "./Pages/User/Interaction";
import Sideeffects from "./Pages/User/Sideeffects";
import Pill from "./Pages/User/Pill";
import NewDrugs from "./Pages/User/NewDrugs";
import Details from "./Pages/User/MedicineDetailsPage";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Consultation from "./Pages/Admin/Meetings";
import User from "./Pages/Admin/User";
import MedicalNews from "./Pages/User/MedicalNews";
import Medicine from "./Pages/Admin/Medicine";
import Appointment from "./Pages/User/Appointment";
import HomePage from "./Pages/Doctor/Homep";
import PatientList from "./Pages/Doctor/patientList";
import Profile from "./Pages/User/profile";
import UserLayout from "./Layout/UserLayout";
import AdminLayout from "./Layout/AdminLayout";
import { AuthContext } from "./Context/AuthContext";
import { makeRequest } from "./Axios";

const App = () => {
  const { user, setUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await makeRequest.get("/auth/verify");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!user) {
      fetchUserDetails();
    } else {
      setLoading(false);
    }
  }, [user, setUser]);

  const ProtectedRoute = ({ children, layout: Layout }) => {
    if (loading) {
      return <p>Loading</p>;
    }
    console.log(user);
    if (!user) {
      return <Navigate to="/login" />;
    }

    if (user.user_type === "user" && Layout === UserLayout) {
      return children;
    } else if (user.user_type === "admin" && Layout === AdminLayout) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  };

  const router = createBrowserRouter([
    {
      path: "/user",
      element: (
        <ProtectedRoute layout={UserLayout}>
          <UserLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/user/check",
          element: <Interaction />,
        },
        {
          path: "/user/side",
          element: <Sideeffects />,
        },
        {
          path: "/user/pill",
          element: <Pill />,
        },
        {
          path: "/user/appointment",
          element: <Appointment />,
        },
        {
          path: "/user/profile",
          element: <Profile />,
        },
        {
          path: "/user/newdrugs",
          element: <NewDrugs />,
        },
        {
          path: "/user/details/:id",
          element: <Details />,
        },
        {
          path: "/user/medicalnews",
          element: <MedicalNews />,
        },
        {
          path: "/user/homep",
          element: <HomePage />,
        },
        {
          path: "/user/patient",
          element: <PatientList />,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute layout={AdminLayout}>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/admin/user",
          element: <User />,
        },
        {
          path: "/admin/meetings",
          element: <Consultation />,
        },
        {
          path: "/admin/admindash",
          element: <AdminDashboard />,
        },
        {
          path: "/admin/medicine",
          element: <Medicine />,
        },
        {
          path: "/admin/doctor",
          element: <Medicine />,
        },
      ],
    },
    {
      path: "/login",
      element: <AuthForm />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/adminf",
      element: <AdminF />,
    },
    // {
    //   path: '*',
    //   element: <NotFound />,
    // },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
