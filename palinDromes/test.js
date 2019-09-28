const palinDromes = require('./index');

describe('test "palinDromes" fn', () => {

    test('"abba" is palinDromes', () => {

        const abba = palinDromes('abba');
        expect(abba).toBe(true);

    });

    test('"terry" not palinDromes', () => {

        const terry = palinDromes('terry');
        expect(terry).toBe(false);

    });

});
