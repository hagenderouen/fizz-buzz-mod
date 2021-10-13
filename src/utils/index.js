function flattenLog(array) {
    for (const item of array) {
        if (Array.isArray(item)) {
            item.forEach(element => console.log(element.term));
        } else {
            console.log(item);
        }
    }
    return;
}

function getNumsInObject(answers) {
    let numbers = [];
    for (const key in answers) {
        if (typeof answers[key] === 'number') {
            numbers.push(answers[key]);
        }
    }
    return numbers;
};

function getCommonDivisors(nums) {
    let result = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (i !== j) {
                result.push(nums[i] * nums[j]);
            }
        }
    };
    return result;
};

function addCommonDivisors(divisorsObj) {
    let divisors = [];
    for (const divisor in divisorsObj.single) {
        divisors.push([divisor, divisorsObj.single[divisor]]);
    };
    
    for (var i = 0; i < divisors.length; i++) {
        for (var j = i + 1; j < divisors.length; j++) {
            if (i !== j) {
                let [firstValue, firstTerms] = divisors[i];
                let [secondValue, secondTerms] = divisors[j];
                let commonMultiple = firstValue * secondValue;
                let commonTerm = firstTerms[0] + secondTerms[0];
                divisorsObj.common[commonMultiple] = { term: commonTerm };
            }
        }
    }

    return divisorsObj;

}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
};

function isTermInMatches(string, matches) {
    let result = false;
    let terms = [];
    for (const item of matches) {
        terms.push(item.term);
    }
    terms.forEach(term => {
    	if (term.indexOf(string) > -1) {
      	result = true;
      }
    })
    
    return result;
};

module.exports = {
    flattenLog,
    getNumsInObject,
    getCommonDivisors,
    addCommonDivisors,
    isEmpty,
    isTermInMatches
};



