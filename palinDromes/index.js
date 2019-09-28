const reverseString = require('../reverseString');

const palinDromes = (string) => (
    // #1
    // reverseString(string) === string
    // #2
    string.split('').every((char, idx) => (
        char === string[string.length - idx - 1]
    ))
);

module.exports = palinDromes;
