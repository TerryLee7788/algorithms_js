const chunk = require('./index');

describe('test "chunk" fn', () => {

    test('function chunk exists', () => {

        expect(typeof chunk).toBeDefined();

    });

    test('chunk an array of 10 elements with chunk size 2', () => {

        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const chunked = chunk(arr, 2);

        expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);

    });

    test('chunk an array of 5 elements with chunk size 3', () => {

        const arr = [1, 2, 3, 4, 5];
        const chunked = chunk(arr, 3);

        expect(chunked).toEqual([[1, 2, 3], [4, 5]]);

    });

});