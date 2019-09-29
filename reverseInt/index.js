const reverseString = require('../reverseString');

function reverseInt (number) {

    return parseInt(
        reverseString(
            number.toString()
        )
    ) * Math.sign(number);

}

console.log(reverseInt(15));
console.log(reverseInt(-15));

module.exports = reverseInt;
