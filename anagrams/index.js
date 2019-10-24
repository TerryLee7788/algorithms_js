function anagrams (stringA, stringB) {

//     const calChatNum = (sum, str) => {

//             const num = str.charCodeAt(0);
//             sum += num;
//             return sum;

//         },
//         strA = clearString(stringA),
//         strB = clearString(stringB);

//     return strA.split('').reduce(calChatNum, 0) === strB.split('').reduce(calChatNum, 0);
    return clearString(stringA) === clearString(stringB);

}

// helper function
function clearString (str) {

//     return str.replace(/[^\w]/g, '').toLowerCase();
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

}

module.exports = anagrams;
