const reverseInt = require('./index');

describe('test "reverseInt" fn', () => {

    test('"15" tobe "51"', () => {

        const number = 15;
        expect(reverseInt(number)).toBe(51);

    });

    test('"-15" tobe "-51"', () => {

        const number = -15;
        expect(reverseInt(number)).toBe(-51);

    });

});
