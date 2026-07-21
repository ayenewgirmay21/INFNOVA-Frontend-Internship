import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ApplicantDetails from "../pages/ApplicantDetails";


import ProtectedRoute from "../components/ProtectedRoute";


import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";



export default function AppRoutes() {


  return (

    <BrowserRouter>

      <Routes>


        {/* Public Routes */}

        <Route element={<AuthLayout />}>

          <Route
            path="/login"
            element={<Login />}
          />

        </Route>




        {/* Protected Routes */}

        <Route element={<ProtectedRoute />}>

          <Route element={<DashboardLayout />}>


            <Route
              path="/dashboard"
              element={<Dashboard />}
            />


            <Route
              path="/applicant/:id"
              element={<ApplicantDetails />}
            />


          </Route>

        </Route>




        {/* Default Route */}

        <Route

          path="*"

          element={
            <Navigate
              to="/login"
              replace
            />
          }

        />


      </Routes>


    </BrowserRouter>

  );

}