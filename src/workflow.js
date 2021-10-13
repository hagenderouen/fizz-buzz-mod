const inquirer = require('inquirer');
const { singleDivisors, isAddingDivisor, commonDivisors } = require('./prompts');
const { isEmpty, addCommonDivisors } = require('./utils');
const logDivisorsUpTo = require('./logDivisors');

function start(divisorsObj = {}) {
    
    if (isEmpty(divisorsObj)) {
        divisorsObj.common = {};
        divisorsObj.single = {};

        getSingleDivisors(divisorsObj);
    } else {
        inquirer.prompt(isAddingDivisor)
        .then((answerAdding) => {
            if (answerAdding.isAddingDivisor) {
                getSingleDivisors(divisorsObj);
            } else {
                divisorsObj = addCommonDivisors(divisorsObj);
        
                inquirer.prompt(commonDivisors(divisorsObj))
                .then((commonAnswers) => {
                    divisorsObj = updateCommon(divisorsObj, commonAnswers.commonTerms);
                    
                    logDivisorsUpTo(divisorsObj, 21);
                })
                .catch((err) => console.log(err));
            }
        })
        .catch((err) => console.log(err));
    }

    
};

function getSingleDivisors(divisorsObj) {
    inquirer.prompt(singleDivisors)
    .then((answers) => {
        let value = answers.divisorValue;
        let terms = [];
        if (answers.divisorSecondTerm) {
            terms = [answers.divisorTerm, answers.divisorSecondTerm];
        } else {
            terms = [answers.divisorTerm]
        }
        
        divisorsObj.single[value] = [...terms];
        start(divisorsObj);
    })
    .catch((err) => console.log(err));
};

function updateCommon(divisorsObj, commonTerms) {
    for (const divisor in divisorsObj.common) {
        let commonDivisor = divisorsObj.common[divisor].term;
        if (commonTerms.includes(commonDivisor)) {
            let copy = divisorsObj.common[divisor];
            divisorsObj.common[divisor] = {
                ...copy,
                isSelected: true
            };
        }
    }
    return divisorsObj;
}

module.exports = start;