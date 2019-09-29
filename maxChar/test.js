const maxChar = require('./index');

describe('test "maxChar" fn', () => {

    test('"apple 123111" max char is "1"', () => {

        const string = 'apple 123111';
        expect(maxChar(string)).toBe('1');
        
    });

});
