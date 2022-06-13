/**
 * Returns # of combinations from a given pool size and slot availability
 * @param {Number} poolSize Total # of options
 * @param {Number} slots Slots to fill
 * @returns {Number} # of combinations from a poolsize and slot number
 */
let combinations = (poolSize, slots) => {
    let permutations = factorial(poolSize) / factorial(poolSize - slots);
    let combinationDenom = factorial(slots);
    return permutations / combinationDenom;
};

let factorial = (inputNumber) => {
    // Edge case
    if (inputNumber===0) return 0;

    // Base case
    if (inputNumber===1) return 1;

    let max = 1;

    return inputNumber * factorial(inputNumber-1);
};

console.log(combinations(10,5))