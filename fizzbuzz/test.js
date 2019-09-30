const fizzBuzz = require('./index');

describe('test "fizzBuzz" fn', () => {

    test('"fizzBuzz(15)" print "fizzBuzz"', () => {

        expect(fizzBuzz(15)).toBe('fizzBuzz');

    });

    test('"fizzBuzz(99)" print "fizz"', () => {

        expect(fizzBuzz(99)).toBe('fizz');

    });

    test('"fizzBuzz(50)" print "buzz"', () => {

        expect(fizzBuzz(50)).toBe('buzz');

    });

    test('"fizzBuzz(68)" print "68"', () => {

        expect(fizzBuzz(68)).toBe(68);

    });

});
