module.exports = {

	"configs": {

		"js-front": {

			"plugins": [
				"n",
				"@stylistic",
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
				"n",
				"@stylistic",
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
				"n",
				"@typescript-eslint",
				"@stylistic",
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
				"n",
				"@stylistic",
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
				"n",
				"react",
				"react-hooks",
				"@stylistic",
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

		// Possible Problems

		"array-callback-return": "error",
		"constructor-super": "error",
		"for-direction": "error",
		"getter-return": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": "error",
		"no-constructor-return": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-empty-character-class": "error",
		"no-empty-pattern": "error",
		"no-ex-assign": "error",
		"no-fallthrough": "error",
		"no-func-assign": "error",
		"no-import-assign": "error",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-loss-of-precision": "error",
		"no-misleading-character-class": "error",
		"no-new-native-nonconstructor": "error",
		"no-new-symbol": "error",
		"no-obj-calls": "error",
		"no-promise-executor-return": "error",
		"no-prototype-builtins": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-setter-return": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-this-before-super": "error",
		"no-undef": "error",
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unreachable": "error",
		"no-unreachable-loop": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": "error",
		"no-unused-private-class-members": "error",
		"no-unused-vars": "error",
		"no-use-before-define": "warn", // [warn] in lib declarations, some methods can use the following ones (sub-methods) for clarity
		"no-useless-backreference": "error",
		"require-atomic-updates": "error",
		"use-isnan": "error",
		"no-regex-spaces": "error",
		"valid-typeof": "error",

		// Suggestions

		"accessor-pairs": "error",
		"arrow-body-style": [ "error", "always" ],
		"block-scoped-var": "error",
		"camelcase": "error",
		"capitalized-comments": "off", // [off] comments should be free
		"class-methods-use-this": "warn", // [warn] inherited methods can not have "this" used
		"complexity": "error",
		"consistent-return": "error",
		"consistent-this": "error",
		"curly": "error",
		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-notation": "error",
		"eqeqeq": "error",
		"func-name-matching": "error",
		"func-names": "error",
		"func-style": [ "error", "declaration" ],
		"grouped-accessor-pairs": "error",
		"guard-for-in": "off", // [off] never meet this case
		"id-denylist": "warn", // [warn] should not be used, but tolerated
		"id-length": "off", // [off] too many use of length 1 vars (Exception e, for let i, etc...)
		"id-match": "off", // [off] too much restrictive
		"init-declarations": "error",
		"logical-assignment-operators": [ "error", "always" ],
		"max-classes-per-file": [ "warn", { "ignoreExpressions": true, "max": 1 } ], // [warn] can be tolerated for libs
		"max-depth": [ "warn" ], // [warn] should not be used, but tolerated for specific complex methods
		"max-lines": [ "warn", { "skipBlankLines": true, "skipComments": true } ], // [warn] should not be used, but tolerated for old or complex files
		"max-lines-per-function": [ "warn", { "skipBlankLines": true, "skipComments": true } ], // [warn] should not be used, but tolerated for old or complex files
		"max-nested-callbacks": "warn", // [warn] should not be used, but tolerated for specific complex methods
		"max-params": "warn", // [warn] should not be used, but tolerated for specific complex methods
		"max-statements": "warn", // [warn] can be tolerated for old or complex files
		"multiline-comment-style": "off", // [off] comments should be free
		"new-cap": "error",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-bitwise": [ "error", { "allow": [ "^" ] } ],
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-console": "error",
		"no-continue": "error",
		"no-delete-var": "error",
		"no-div-regex": "error",
		"no-else-return": "warn", // [warn] should not be used, but tolerated
		"no-empty": "error",
		"no-empty-function": "error",
		"no-empty-static-block": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-label": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-inline-comments": "off", // [off] comments should be free
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-magic-numbers": "off", // [off] why assign var for obvious use (like 60 minutes = 1h) ?
		"no-multi-assign": "error",
		"no-multi-str": "error",
		"no-negated-condition": "warn", // [warn] should not be used, but tolerated
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": "error",
		"no-object-constructor": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-plusplus": "off", // [off] wtf ?
		"no-proto": "error",
		"no-redeclare": "error",
		"no-restricted-exports": "off", // [off] can be tolerated for libs
		"no-restricted-globals": "error",
		"no-restricted-imports": "off", // [off] never meet this case
		"no-restricted-properties": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-sequences": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-ternary": "off", // [off] wtf ?
		"no-throw-literal": "error",
		"no-undef-init": "error",
		"no-undefined": "warn", // [warn] should not be used, but tolerated
		"no-underscore-dangle": "off", // [off] used for private attributes/methods in class
		"no-unneeded-ternary": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"no-warning-comments": "error",
		"no-with": "error",
		"object-shorthand": "off", // [off] too complex to implement properly
		"one-var": [ "error", "never" ],
		"operator-assignment": [ "error", "always" ],
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		"prefer-exponentiation-operator": "error",
		"prefer-named-capture-group": "warn", // [warn] should not be used, but tolerated
		"prefer-numeric-literals": "error",
		"prefer-object-has-own": "error",
		"prefer-object-spread": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-regex-literals": "off", // [off] less clear
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "off", // [off] less clear
		"radix": "error",
		"require-await": "error",
		"require-unicode-regexp": "off", // [off] never meet this case
		"require-yield": "error",
		"sort-imports": "off", // [off] less clear (in certain cases)
		"sort-keys": "off", // [off] less clear (in certain cases)
		"sort-vars": "error",
		"strict": [ "error", "global" ],
		"symbol-description": "error",
		"vars-on-top": "error",
		"yoda": [ "error", "always" ],

		// Layout & Formatting

		"line-comment-position": "off", // [off] comments should be free
		"unicode-bom": "off", // [off] never meet this case

		// plugins

			// n
			"n/callback-return": "error",

			// stylistic

			"@stylistic/array-bracket-newline": "error",
			"@stylistic/array-bracket-spacing": [ "error", "always" ],
			"@stylistic/array-element-newline": [ "error", "consistent" ],
			"@stylistic/arrow-parens": [ "error", "always" ],
			"@stylistic/arrow-spacing": ["error", { "before": true, "after": true } ],
			"@stylistic/block-spacing": "error",
			"@stylistic/brace-style": [ "error", "stroustrup" ],
			"@stylistic/comma-dangle": [ "error", "never" ],
			"@stylistic/comma-spacing": [ "error", { "before": false, "after": true } ],
			"@stylistic/comma-style": [ "error", "last" ],

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
