import React from "react";

import LayoutContainer from "./components/layoutContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function ViewRouter(props) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LayoutContainer />} />
			</Routes>
		</BrowserRouter>
	)
}

export default ViewRouter;