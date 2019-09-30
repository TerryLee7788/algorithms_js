function chunk (array, size) {

    const newArray = [];

    // #1
    // for (let element of array) {

    //     const last = newArray[newArray.length - 1];

    //     if (!last || last.length === size) {

    //         newArray.push([element]);

    //     }
    //     else {

    //         last.push(element);

    //     }

    // }

    // #2
    let idx = 0;
    while (idx < array.length) {

        newArray.push(

            array.slice(idx, idx + size)

        );

        idx += size;

    }

    return newArray;


}

chunk([1,2,3,4,5], 2);

module.exports = chunk;
