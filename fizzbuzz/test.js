const fizzBuzz = require('./index');

describe('test "fizzBuzz" fn', () => {

    test('"fizzBuzz(15)" print "fizzBuzz"', () => {

        expect(fizzBuzz(15)).toEqual('fizzBuzz');

    });

    test('"fizzBuzz(99)" print "fizz"', () => {

        expect(fizzBuzz(99)).toEqual('fizz');

    });

    test('"fizzBuzz(50)" print "buzz"', () => {

        expect(fizzBuzz(50)).toEqual('buzz');

    });

    test('"fizzBuzz(68)" print "68"', () => {

        expect(fizzBuzz(68)).toEqual(68);

    });

});
