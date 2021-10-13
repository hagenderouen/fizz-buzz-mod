const { flattenLog, isTermInMatches } = require('./utils');

function logDivisorsUpTo(divisorsObj, num) {
    for (var i = 1; i <= num; i++) {
        logMatchedDivisors(divisorsObj, i);
    }
};

function logMatchedDivisors(divisorsObj, num) {

    let matchedDivisors = [];

    for (const divisor in divisorsObj.common) {
        if (num % divisor === 0) {
            const {term, isSelected} = divisorsObj.common[divisor];
            if (isSelected === true) {
                let match = {number: num, term: term};
                matchedDivisors.push(match);
            }
        } 
    }

    
    for (const divisor in divisorsObj.single) {
        if (num % divisor === 0) {
            let terms = divisorsObj.single[divisor];
            if (matchedDivisors.length === 0) {
                terms.forEach(term => {
                    let match = {number: num, term: term};
                    matchedDivisors.push(match);
                });
            } else {
                
                terms.forEach(term => {
                    if (!isTermInMatches(term, matchedDivisors)) {
                        let match = {number: num, term: term};
                        matchedDivisors.push(match);
                    }
                })
            }

        };
    };
    

    if (!matchedDivisors.length) {
        console.log(num);
    } else {
        flattenLog(matchedDivisors);
    }
    return;
}

module.exports = logDivisorsUpTo;