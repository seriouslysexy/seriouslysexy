import { createTheme } from '@mui/material/styles';
import { lightBlue, pink } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: lightBlue[700]
		},
		secondary: {
			main: pink[300]
		}
	}
});

export default theme;