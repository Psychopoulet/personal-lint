
"use strict";

// deps

	// natives
	const { join } = require("node:path");
	const { exec } = require("node:child_process");

// tests

describe("js", () => {

	describe("front", () => {

		const test = "npx eslint -c ./test/eslintrc/1-1_js-front.js --ext .js,.cjs ./test/patterns/1_js.js";

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

	describe("back", () => {

		const test = "npx eslint -c ./test/eslintrc/1-2_js-back.js --ext .js,.cjs ./test/patterns/1_js.js";

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

});
