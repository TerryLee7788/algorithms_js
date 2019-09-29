function maxChar (string) {

    const charMap = {};
    let max = 0,
        maxChar = '';

    string.split('').forEach((char) => {

        charMap[char] = (charMap[char] + 1) || 1;

    });

    for (let char in charMap) {

        // update the "maxChar" value
        if (charMap[char] > max) {

            max = charMap[char];
            maxChar = char;

        }

    }

    return maxChar;

}

module.exports = maxChar;
