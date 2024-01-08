module.exports = {

	"plugins": [
		"personnallinter"
	],
	"extends": [
		"./commons/js"
	],

	"env": {
		"browser": true
	},

	"parserOptions": {
		"ecmaVersion": "latest"
	},

	"globals": {

		// natives
		"window": true,
		"EventEmitter": true,
		"Promise": true,
		"Map": true,

		// AngularJS & jQuery
		"angular": true,
		"jQuery": true,
		"$": true

	},

	"rules": {
		"no-console": "warn", // [warn] should not be used, but tolerated
		"no-alert": "warn" // [warn] should not be used, but tolerated
	}

};
