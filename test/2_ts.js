
"use strict";

// deps

	// natives
	const { join } = require("node:path");
	const { exec } = require("node:child_process");

// tests

describe("ts", () => {

	describe("front", () => {

		const test = "npx eslint -c ./test/eslintrc/2-1_ts-front.js --ext .ts,.cts ./test/patterns/2_ts.ts";

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

		const test = "npx eslint -c ./test/eslintrc/2-2_ts-back.js --ext .ts,.cts ./test/patterns/2_ts.ts";

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
