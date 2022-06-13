/**
 * Given an input array, return the number of permutations that could be
 * generated
 * @param {Number Array}
 * @returns {Integer} Number of permutations that can be created from input 
 * array
 */
let permutations = (inputArray) => {
    return factorial(inputArray.length);
    // return factorialIterator(inputArray.length);
}

let factorial = (number) => {
    // Base case = When number is 1
    if (number === 1) return number;

    // Recursive case
    return number * factorial(number-1)
};

let factorialIterator = (number) => {
    // Edge case
    if (number === 0) return 0;
    
    let output = 1;

    while (number>0) {
        output *= number;
        number -= 1;
    }

    return output;
}

console.log(permutations([5,4,2,8]))
// permutations([5,4,2,8]) => 24

console.log(permutations([5,4,2,8,9]))
// permutations([5,4,2,8]) => 120