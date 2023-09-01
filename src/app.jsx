import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from "./theme";
import ViewRouter from "./viewrouter";

function App(props) {
	return (
		<ThemeProvider theme={ theme }>
			<CssBaseline />
			<ViewRouter />
		</ThemeProvider>
	)
}

export default App;