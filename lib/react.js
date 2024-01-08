module.exports = {

	"plugins": [
		"personnallinter",
		"@typescript-eslint",
		"react",
		"react-hooks"
	],
	"extends": [
		"./ts-front"
	],

	"parserOptions": {
		"ecmaVersion": "latest",
		"ecmaFeatures": {
			"jsx": true
		}
	},

	"rules": {
		"jsx-quotes": [ "error", "prefer-double" ]
	},

	"settings": {
		"react": {
			"version": "detect"
		}
	}

};
