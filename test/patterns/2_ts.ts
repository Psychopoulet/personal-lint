
// no-unused-vars

var noVar = "test"; // no-var

function doSomething (err, callback) {

	 if (err) { // @stylistic/no-mixed-spaces-and-tabs
        callback(err); // n/callback-return
    }

    callback();

}

const arrayBracketNewline = [ "test 1", "test 2" ]; // @stylistic/array-bracket-newline

const noMultiSpaces =  "test"; // @stylistic/no-multi-spaces
const quotes = 'test'; // @stylistic/quotes
