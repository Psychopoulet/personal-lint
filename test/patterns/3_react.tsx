"use strict";

// deps

	// externals
	import * as React from "react";
	import { createRoot } from "react-dom/client";

	// locals
	import App from "./App";

// render

createRoot(document.getElementById("app") as HTMLElement).render(<App />);
