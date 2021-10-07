const multiples = {
    common: {
        15: {
            output: 'fizzbuzz',
            shared: {
                value: 5,
                output: 'zag'
            }
        },
        20: {
            output: 'zigzag',
            shared: {
                value: 5,
                output: 'buzz'
            }
        },
    },
    single: {
        3: 'fizz',
        5: ['buzz', 'zag'],
        4: 'zig'
    }
}

function main() {
    for (var i = 1; i <= 20; i++) {
        logMultiplesOf(i);
    }
}

function logMultiplesOf(num) {

    let matchedOutputs = [];

    for (const multiple in multiples.common) {
        if (num % multiple === 0) {
            const {output, shared} = multiples.common[multiple];
            matchedOutputs.push(output);
            if (num % shared.value === 0) {
                matchedOutputs.push(shared.output);
            }
            
        } 
    }

    if (!matchedOutputs.length) {
        for (const multiple in multiples.single) {
            if (num % multiple === 0) {
                matchedOutputs.push(multiples.single[multiple]);
            }
        }
    }
    

    if (!matchedOutputs.length) {
        console.log(num);
    } else {
        flattenLog(matchedOutputs);
    }
    return;
}

function flattenLog(array) {
    for (const item of array) {
        if (Array.isArray(item)) {
            item.forEach(element => console.log(element));
        } else {
            console.log(item);
        }
    }
    return;
}

main();