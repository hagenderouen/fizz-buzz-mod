const { getCommonDivisors } = require('./utils');

const singleDivisors = [
    {
        type: 'number',
        message: 'Enter a divisor value. Ex: "3":',
        name: 'divisorValue'
    },
    {
        type: 'input',
        message: 'Enter a term for this divisor value. Ex: "fizz":',
        name: 'divisorTerm'
    },
    {
        type: 'confirm',
        message: 'Would you like to enter a second term for this divisor?',
        name: 'isAddingTerm'
    },
    {
        type: 'input',
        message: 'Enter another term for this divisor value. Ex: "zag":',
        name: 'divisorSecondTerm',
        when: function(answers) {
            return answers.isAddingTerm === true;
        }
    }
];

const isAddingDivisor = {
    type: 'confirm',
    message: 'Would you like to add another divisor?',
    name: 'isAddingDivisor'
};



const commonDivisors = function(divisorsObj) {
    let commonDivisorTerms = [];
    for (const divisors in divisorsObj.common) {
        commonDivisorTerms.push(divisorsObj.common[divisors].term);
    }

    return [
        {
            type: 'checkbox',
            message: 'Select all common divisor terms',
            choices: commonDivisorTerms,
            name: 'commonTerms'
        }
    ];
}

module.exports = {
    singleDivisors,
    isAddingDivisor,
    commonDivisors
};



