import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import { MantineProvider } from "@mantine/core";


createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<MantineProvider defaultColorScheme="dark">
			<App />
		</MantineProvider>
	</BrowserRouter>
);
