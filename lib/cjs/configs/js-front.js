module.exports = {

    "plugins": [ "personnallinter" ],
    "extends": [ "./commons/js" ],

    "env": {
        "browser": true
    },

    "parserOptions": {
        "ecmaVersion": "latest"
    },

    "globals": {

        // AngularJS, jQuery, Socket IO
        "angular": true,
        "jQuery": true,
        "$": true,
        "SocketIOClient": true

    },

    "rules": {
        "no-console": "warn", // [warn] should not be used, but tolerated
        "no-alert": "warn" // [warn] should not be used, but tolerated
    }

};
