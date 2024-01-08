"use strict";

module.exports = {

	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"EXPERIMENTAL_useProjectService": true
	},

	"rules": {

		// [original rules]

		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": "error",
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/ban-ts-comment": "error",
		"@typescript-eslint/ban-tslint-comment": "error",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/class-literal-property-style": "error",
		"@typescript-eslint/consistent-generic-constructors": "error",
		"@typescript-eslint/consistent-indexed-object-style": "error",
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/consistent-type-exports": "error",
		"@typescript-eslint/consistent-type-imports": "error",
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/explicit-member-accessibility": "error",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/lines-between-class-members": "error",
		"@typescript-eslint/member-delimiter-style": "error",
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/method-signature-style": "error",
		"@typescript-eslint/naming-convention": "error",
		"@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/no-confusing-non-null-assertion": "error",
		"@typescript-eslint/no-confusing-void-expression": "error",
		"@typescript-eslint/no-duplicate-enum-values": "error",
		"@typescript-eslint/no-duplicate-type-constituents": "error",
		"@typescript-eslint/no-dynamic-delete": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "error", // [off] generate an error
		"@typescript-eslint/no-extra-non-null-assertion": "error",
		"@typescript-eslint/no-extraneous-class": "error",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-import-type-side-effects": "error",
		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/no-invalid-void-type": "error",
		"@typescript-eslint/no-meaningless-void-operator": "error",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-misused-promises": "error",
		"@typescript-eslint/no-mixed-enums": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-redundant-type-constituents": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-type-alias": "error",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-unnecessary-condition": "error",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-arguments": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/no-unsafe-argument": "error",
		"@typescript-eslint/no-unsafe-assignment": "error",
		"@typescript-eslint/no-unsafe-call": "error",
		"@typescript-eslint/no-unsafe-declaration-merging": "error",
		"@typescript-eslint/no-unsafe-enum-comparison": "error",
		"@typescript-eslint/no-unsafe-member-access": "error",
		"@typescript-eslint/no-unsafe-return": "error",
		"@typescript-eslint/no-unsafe-unary-minus": "error",
		"@typescript-eslint/no-useless-empty-export": "error",
		"@typescript-eslint/no-useless-template-literals": "error",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/non-nullable-type-assertion-style": "error",
		"@typescript-eslint/parameter-properties": "error",
		"@typescript-eslint/prefer-as-const": "error",
		"@typescript-eslint/prefer-enum-initializers": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-literal-enum-member": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-readonly": "error",
		"@typescript-eslint/prefer-readonly-parameter-types": "error",
		"@typescript-eslint/prefer-reduce-type-parameter": "error",
		"@typescript-eslint/prefer-regexp-exec": "error",
		"@typescript-eslint/prefer-return-this-type": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/prefer-ts-expect-error": "error",
		"@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/quotes": "error",
		"@typescript-eslint/require-array-sort-compare": "error",
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/restrict-template-expressions": "error",
		"@typescript-eslint/sort-type-constituents": "error",
		"@typescript-eslint/strict-boolean-expressions": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"@typescript-eslint/triple-slash-reference": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/typedef": "error",
		"@typescript-eslint/unbound-method": "error",
		"@typescript-eslint/unified-signatures": "error",

		// [extended rules]

		// eslint

        // Possible Problems

		"@typescript-eslint/no-dupe-class-members": "error",
		"@typescript-eslint/no-loss-of-precision": "error",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-use-before-define": "warn", // [warn] in lib declarations, some methods can use the following ones (sub-methods) for clarity

		// Suggestions
		"@typescript-eslint/class-methods-use-this": "warn", // [warn] inherited methods can not have "this" used
		"@typescript-eslint/default-param-last": "error",
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/init-declarations": "error",
		"@typescript-eslint/max-params": "warn", // [warn] should not be used, but tolerated for specific complex methods
		"@typescript-eslint/no-array-constructor": "error",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-implied-eval": "error",
		"@typescript-eslint/no-invalid-this": "error",
		"@typescript-eslint/no-loop-func": "error",
		"@typescript-eslint/no-magic-numbers": "off", // [off] why assign var for obvious use (like 60 minutes = 1h) ?
		"@typescript-eslint/no-redeclare": "error",
		"@typescript-eslint/no-restricted-imports": "off", // [off] never meet this case
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-throw-literal": "error",
		"@typescript-eslint/no-unused-expressions": "error",
		"@typescript-eslint/no-useless-constructor": "error",
		"@typescript-eslint/prefer-destructuring": "error",
		"@typescript-eslint/require-await": "error",

		// Deprecated

		// removed
		// "@typescript-eslint/return-await": "error",

		// @stylistic

		"@typescript-eslint/block-spacing": "error",
		"@typescript-eslint/brace-style": [ "error", "stroustrup" ],
		"@typescript-eslint/comma-dangle": [ "error", "never" ],
		"@typescript-eslint/comma-spacing": [ "error",
			{ "before": false, "after": true }
		],
		"@typescript-eslint/func-call-spacing": "error",
		"@typescript-eslint/indent": [ "error", 4 ],
		"@typescript-eslint/key-spacing": [ "error",
			{ "beforeColon": false, "afterColon": true }
		],
		"@typescript-eslint/keyword-spacing": [ "error",
			{ "after": true, "before": true }
		],
		"@typescript-eslint/lines-around-comment": "error",
		"@typescript-eslint/no-extra-parens": "error",
		"@typescript-eslint/no-extra-semi": "error",
		"@typescript-eslint/object-curly-spacing": [ "error", "always" ],
		"@typescript-eslint/padding-line-between-statements": "error",
		"@typescript-eslint/semi": [ "error", "always" ],
		"@typescript-eslint/space-before-blocks": [ "error", "always" ],
		"@typescript-eslint/space-before-function-paren": [ "error", "always" ],
		"@typescript-eslint/space-infix-ops": "error"

	}

};
