// import reverseString from './index';
const reverseString =  require('./index');

describe('test "reverseString" fn', () => {

    test('"terry" tobe "yrret"', () => {

        const terry = reverseString('terry');
        expect(terry).toBe('yrret');

    });

});
