import React from "react";

import LayoutContainer from "./components/layoutContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class ViewRouter extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LayoutContainer />} />
				</Routes>
			</BrowserRouter>
		)
	}
}

export default ViewRouter;