import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Onboarding from "../pages/Onboarding";
import UnitDetails from "../pages/UnitDetails";
import UnitsPage from "../pages/Units";
import Layout from "./layout/Layout";
import OuterLayout from "./outerlayout/OuterLayout";
import Support from "../components/support/Support";
import ChatSupport from "../pages/ChatSupport";
import Login from "../components/auth/login/Login";

export default function Template(): JSX.Element {
  const userType = localStorage.getItem("type");
  const token: any = localStorage.getItem("accessToken");

  const PrivateRoute = () => {
    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="units" element={<UnitsPage />} />
            <Route path="unitdetails/:id" element={<UnitDetails />} />
            <Route path="support" element={<ChatSupport />} />
          </Route>
        </Route>

        <Route path="/" element={<OuterLayout />}>
          <Route index element={<Onboarding />} />
          <Route
            path="/login"
            element={userType ? <Login /> : <Navigate to="/" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
