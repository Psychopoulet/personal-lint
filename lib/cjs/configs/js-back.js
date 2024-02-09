module.exports = {

    "plugins": [ "personnallinter" ],
    "extends": [ "./commons/js" ],

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
        "NodeJS": true,
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

    },

    "rules": {
        "no-console": "warn", // [warn] should not be used, but tolerated
        "no-alert": "error"
    }

};
