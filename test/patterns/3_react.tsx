// deps

	// externals
	import * as React from "react";
	import { createRoot } from "react-dom/client";

	// locals
	import App from "./App";

// render

createRoot(document.getElementById("app") as HTMLElement).render(<App />);


// no-unused-vars

var noVar = "test"; // no-var

function doSomething (err, callback) {

	 if (err) { // @stylistic/no-mixed-spaces-and-tabs
        callback(err); // n/callback-return
    }

    callback();

}

const arrayBracketNewline = [ "test 1", "test 2", "test 3" ]; // @stylistic/array-bracket-newline

const noMultiSpaces =  "test"; // @stylistic/no-multi-spaces
const quotes = 'test'; // @stylistic/quotes
