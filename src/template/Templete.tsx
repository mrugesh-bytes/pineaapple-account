import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "../pages/Onboarding";
import UnitDetails from "../pages/UnitDetails";
import UnitsPage from "../pages/Units";
import Layout from "./layout/Layout";
import OuterLayout from "./outerlayout/OuterLayout";
import ChatSupport from "../pages/ChatSupport";
import Login from "../components/auth/login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Signup from "../components/auth/signup/Signup";
import Staff from "../pages/Staff";
import Loggedin from "../components/auth/loggedin/loggedin";

const Templete = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProtectedRoutes />}>
					<Route path="/" element={<Layout />}>
						<Route path="units" element={<UnitsPage />} />
						<Route path="unitdetails/:id" element={<UnitDetails />} />
						<Route path="support" element={<ChatSupport />} />
						<Route path="staff" element={<Staff />} />
					</Route>
				</Route>
				<Route path="/" element={<OuterLayout />}>
					<Route index element={<Onboarding />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/loggedin" element={<Loggedin />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Templete;
