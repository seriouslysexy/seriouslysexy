import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from "./theme";
import ViewRouter from "./viewrouter";

class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme={ theme }>
				<CssBaseline />
				<ViewRouter />
			</ThemeProvider>
		)
	}
}

export default App;