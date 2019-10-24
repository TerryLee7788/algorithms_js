const anagrams = require('./index');

describe('test "anagrams" fn', () => {

    test('function "anagrams" exists', () => {

        expect(typeof anagrams).toBeDefined();

    });

    test('test "rail safety" is equal to "fairy tales" string', () => {

        expect(anagrams(
            'rail safety',
            'fairy tales'
        )).toEqual(true);

    });

    test('test "RAIL! SAFETY!" is equal to "fairy tales" string', () => {

        expect(anagrams(
            'RAIL! SAFETY!',
            'fairy tales'
        )).toEqual(true);

    });

    test('test "Hi there" not equal to "Bye there" string', () => {

        expect(anagrams(
            'Hi there',
            'Bye there'
        )).toEqual(false);

    });

});
