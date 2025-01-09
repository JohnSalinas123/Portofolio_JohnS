import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
	fontFamily: "Open Sans",
	headings: { fontFamily: "Montserrat" },
});

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<MantineProvider theme={theme}>
			<App />
		</MantineProvider>
	</BrowserRouter>
);
