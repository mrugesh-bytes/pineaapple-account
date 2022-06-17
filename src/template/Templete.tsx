import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "../pages/Onboarding";
import UnitDetails from "../pages/UnitDetails";
import UnitsPage from "../pages/Units";
import Layout from "./layout/Layout";
import OuterLayout from "./outerlayout/OuterLayout";
import Support from "../components/support/Support";
import ChatSupport from "../pages/ChatSupport";
export default function Template(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="units" element={<UnitsPage />} />
					<Route path="unitdetails/:id" element={<UnitDetails />} />
					<Route path="support" element={<ChatSupport />} />
				</Route>
				<Route path="/" element={<OuterLayout />}>
					<Route index element={<Onboarding />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
