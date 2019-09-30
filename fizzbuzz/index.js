function fizzBuzz (number) {

    let type = '';

    if (number % 15 === 0) {

        type = 'fizzBuzz';

    }
    else if (number % 5 === 0) {

        type = 'buzz';

    }
    else if (number % 3 === 0) {

        type = 'fizz';

    }
    else {

        type = number;

    }

    return type;

}

module.exports = fizzBuzz;
