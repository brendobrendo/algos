/**
 * 
 * @param {Integer} n The number of steps to climb
 * @returns {Integer} The number of distinct ways to climb the given number of steps
 * if we can only make one or two steps at a time.
 */
let climbingStairs = (n) => {
    let stepArray = [];
    stepArray[0] = 1;
    stepArray[1] = 1;

    for (let i=2; i<=n; i++){
        stepArray[i] = stepArray[i-1] + stepArray[i-2]
    }

    return stepArray[n];
}

let climbingStairsRecursive = (n) => {
    
}

console.log(climbingStairs(6));