const reverseString = (string = '') => (

    // #1
    // string.split('').reverse().join('')

    // #2
    string.split('').reduce((reversed, char) => (char + reversed), '')

);

// https://github.com/chenshenhai/node-modules-demo
module.exports = reverseString;
