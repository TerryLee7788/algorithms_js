const reverseString = (string = '') => (

    // #1
    string.split('').reverse().join('')

    // #2
    // string.split('').reduce((reversed, char) => (char + reversed), '')

);

// https://github.com/chenshenhai/node-modules-demo
// export default reverseString;
module.exports = reverseString;
