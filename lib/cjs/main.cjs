module.exports = {

	"configs": {

		"js-front": {

			"plugins": [
				"personnallinter"
			],
			"extends": [
				"eslint:recommended"
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

			}

		},

		"js-back": {

			"plugins": [
				"personnallinter"
			],
			"extends": [
				"eslint:recommended"
			],

			"env": {
				"node": true
			},

			"parserOptions": {
				"ecmaVersion": "latest",
				"sourceType": "module"
			},

			"globals": {

				// natives
				"__dirname": true,
				"__filename": true,
				"Buffer": true,
				"console": true,
				"clearInterval": true,
				"clearTimeout": true,
				"module": true,
				"os": true,
				"process": true,
				"Promise": true,
				"require": true,
				"setImmediate": true,
				"setInterval": true,
				"setTimeout": true,

				// mocha
				"after": true,
				"afterEach": true,
				"before": true,
				"beforeEach": true,
				"describe": true,
				"it": true

			}

		},

		"ts-front": {

			"plugins": [
				"@typescript-eslint",
				"personnallinter"
			],
			"extends": [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended"
			],

			"env": {
				"browser": true
			},

			"parser": "@typescript-eslint/parser",
			"parserOptions": {
				"ecmaVersion": "latest"
			},

			"rules": {
				"@typescript-eslint/no-explicit-any": 0
			}

		},

		"ts-back": {

			"plugins": [
				"@typescript-eslint",
				"personnallinter"
			],
			"extends": [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended"
			],

			"env": {
				"node": true
			},

			"parser": "@typescript-eslint/parser",
			"parserOptions": {
				"ecmaVersion": "latest",
				"sourceType": "module"
			},

			"rules": {
				"@typescript-eslint/no-explicit-any": 0
			}

		},

		"react": {

			"plugins": [
				"@typescript-eslint",
				"react",
				"react-hooks",
				"personnallinter"
			],
			"extends": [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:react/recommended",
				"plugin:react-hooks/recommended"
			],

			"env": {
				"browser": true
			},

			"parser": "@typescript-eslint/parser",
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

		}

	},

	"rules": {

		"for-direction": "error",
		"getter-return": "error",
		"no-await-in-loop": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-console": "error",
		"no-constant-condition": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": "error",
		"no-func-assign": "error",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-obj-calls": "error",
		"no-prototype-builtins": "error",
		"no-regex-spaces": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"use-isnan": "error",
		"valid-typeof": "error",

		"accessor-pairs": "error",
		"array-callback-return": "error",
		"block-scoped-var": "error",
		"class-methods-use-this": 0,
		"complexity": "error",
		"consistent-return": "error",
		"curly": "error",
		"default-case": "error",
		"dot-notation": "error",
		"eqeqeq": "error",
		"guard-for-in": 0,
		"no-alert": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-div-regex": "error",
		"no-else-return": 0,
		"no-empty-function": "error",
		"no-empty-pattern": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-fallthrough": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-magic-numbers": 0,
		"no-multi-str": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-proto": "error",
		"no-redeclare": "error",
		"no-restricted-properties": "error",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-useless-return": "error",
		"no-void": "error",
		"no-warning-comments": "error",
		"no-with": "error",
		"prefer-promise-reject-errors": "error",
		"radix": "error",
		"require-await": "error",
		"vars-on-top": "error",
		"yoda": [ "error", "always" ],

		"strict": [ "error", "global" ],

		"init-declarations": "error",
		"no-delete-var": "error",
		"no-label-var": "error",
		"no-restricted-globals": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-undef": "error",
		"no-undef-init": "error",
		"no-undefined": 0,
		"no-unused-vars": "error",
		"no-use-before-define": 0,

		"camelcase": "error",
		"capitalized-comments": 0,
		"consistent-this": "error",
		"func-name-matching": "error",
		"func-names": "error",
		"func-style": [ "error", "declaration" ],
		"id-length": 0,
		"id-match": 0,
		"line-comment-position": 0,
		"max-depth": [ "error", 4 ],
		"max-lines": [ "error", { "max": 500, "skipComments": true } ],
		"max-nested-callbacks": 0,
		"max-params": 0,
		"max-statements": [ "error", 25 ],
		"new-cap": "error",
		"no-array-constructor": "error",
		"no-bitwise": [ "error", { "allow": [ "^" ] } ],
		"no-continue": "error",
		"no-inline-comments": 0,
		"no-lonely-if": "error",
		"no-multi-assign": "error",
		"no-negated-condition": 0,
		"no-nested-ternary": "error",
		"no-plusplus": 0,
		"no-restricted-syntax": "error",
		"no-ternary": 0,
		"no-underscore-dangle": 0,
		"no-unneeded-ternary": "error",
		"one-var": [ "error", "never" ],
		"operator-assignment": [ "error", "always" ],
		"sort-keys": 0,
		"sort-vars": "error",
		"unicode-bom": 0,

		"arrow-body-style": [ "error", "always" ],
		"constructor-super": "error",
		"no-class-assign": "error",
		"no-const-assign": "error",
		"no-dupe-class-members": "error",
		"no-duplicate-imports": "error",
		"no-new-symbol": "error",
		"no-restricted-imports": 0,
		"no-this-before-super": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"object-shorthand": 0,
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		"prefer-numeric-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": 0,
		"require-yield": "error",
		"sort-imports": 0,
		"symbol-description": "error",

		// deprecated

		"array-bracket-newline": "error",
		"array-bracket-spacing": [ "error", "always" ],
		"array-element-newline": [ "error", "consistent" ],
		"arrow-parens": [ "error", "always" ],
		"arrow-spacing": ["error", { "before": true, "after": true } ],
		"block-spacing": "error",
		"brace-style": [ "error", "stroustrup" ],
		"callback-return": "error",
		"comma-dangle": [ "error", "never" ],
		"comma-spacing": [ "error", { "before": false, "after": true } ],
		"comma-style": [ "error", "last" ],
		"computed-property-spacing": [ "error", "never" ],
		"dot-location": [ "error", "property" ],
		"eol-last": "error",
		"func-call-spacing": "error",
		"generator-star-spacing": [ "error", { "before": true, "after": false } ],
		"global-require": 0,
		"handle-callback-err": "error",
		"id-blacklist": 0,
		"indent": 0,
		"key-spacing": [ "error", { "beforeColon": false, "afterColon": true } ],
		"keyword-spacing": [ "error", { "after": true, "before": true } ],
		"linebreak-style": 0,
		"lines-around-comment": "error",
		"max-len": 0,
		"max-statements-per-line": [ "error", { "max": 2 } ],
		"multiline-ternary": 0,
		"new-parens": "error",
		"newline-per-chained-call": 0,
		"no-buffer-constructor": "error",
		"no-catch-shadow": "error",
		"no-confusing-arrow": "error",
		"no-extra-parens": "error",
		"no-extra-semi": "error",
		"no-floating-decimal": "error",
		"no-mixed-operators": "error",
		"no-mixed-requires": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-path-concat": "error",
		"no-process-env": "error",
		"no-process-exit": "error",
		"no-restricted-modules": "error",
		"no-return-await": "error",
		"no-sync": "error",
		"no-tabs": [ "error", { "allowIndentationTabs": true } ],
		"no-trailing-spaces": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": [ "error", "below" ],
		"object-curly-newline": [ "error", { "consistent": true } ],
		"object-curly-spacing": [ "error", "always" ],
		"object-property-newline": "error",
		"one-var-declaration-per-line": "error",
		"operator-linebreak": [ "error", "after" ],
		"padded-blocks": ["error", { "classes": "always", "switches": "always" } ],
		"padding-line-between-statements": "error",
		"quote-props": [ "error", "always" ],
		"quotes": [ "error", "double" ],
		"require-jsdoc": "error",
		"rest-spread-spacing": [ "error", "never" ],
		"semi": [ "error", "always" ],
		"semi-spacing": [ "error", { "before": false, "after": true } ],
		"semi-style": [ "error", "last" ],
		"space-before-blocks": [ "error", "always" ],
		"space-before-function-paren": [ "error", "always" ],
		"space-in-parens": [ "error", "never" ],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": [ "error", "always" ],
		"switch-colon-spacing": [ "error", { "after": true, "before": false } ],
		"template-curly-spacing": "error",
		"template-tag-spacing": [ "error", "always" ],
		"valid-jsdoc": "error",
		"wrap-iife": "error",
		"wrap-regex": "error",
		"yield-star-spacing": [ "error", { "before": true, "after": false } ]

	}
};
