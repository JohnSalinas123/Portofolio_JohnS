import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import { createTheme, MantineColorsTuple, MantineProvider } from "@mantine/core";
import "./index.css";

const primary: MantineColorsTuple = [
	'#e3f6ff',
	'#cee9ff',
	'#9fcffb',
	'#6db4f6',
	'#439df1',
	'#288eef',
	'#1287f0',
	'#0074d6',
	'#0067c1',
	'#0059ab'
  ];
  

const theme = createTheme({
	colors: {
		primary,
	},
	defaultRadius: 'md',
	autoContrast: true,

})

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<MantineProvider defaultColorScheme="dark" theme={theme}>
			<App />
		</MantineProvider>
	</BrowserRouter>
);
