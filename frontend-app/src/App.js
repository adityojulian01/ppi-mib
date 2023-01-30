import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PPIHeader from "./components/PPIHeader";
import Footer from "./components/Footer";
import "./index.css";
import AdminMenu from "./pages/AdminMenu";
import RequireAuth from "./features/auth/RequireAuth";
import LoginAdmin from "./pages/LoginAdmin";
import PersistLogin from "./features/auth/PersistLogin";

function App() {
	return (
		<>
			<PPIHeader />
			<Routes>
				<Route path="/" element={<Layout />} />
				{/* Public Routes */}
				<Route index element={<Homepage />} />
				<Route path="login" element={<LoginAdmin />} />
				{/* Admin Routes */}
				<Route element={<PersistLogin />}>
					<Route element={<RequireAuth />}>
						<Route path="admin" element={<AdminMenu />} />
					</Route>
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
