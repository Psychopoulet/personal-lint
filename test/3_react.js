
"use strict";

// deps

	// natives
	const { join } = require("node:path");
	const { exec } = require("node:child_process");

// tests

describe("react", () => {

	const test = "npx eslint -c ./test/eslintrc/react.js --ext .ts,.cts,.tsx ./test/patterns/3_react.tsx";

	it(test, () => {

		return new Promise((resolve, reject) => {

			exec(test, {
				"cwd": join(__dirname, "..")
			}, (err, stdout, stderr) => {

				if (err) {
					reject(err);
				}
				else if (stderr) {
					reject(stderr);
				}
				else {
					resolve(stdout);
				}

			});

		});

	}).timeout(10 * 1000);

});
