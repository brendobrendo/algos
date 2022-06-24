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

/**
 * POST MORTEM
 * Dynamic Problem Solving - Taking a big and sophisticated problem and
 * breaking it down into smaller, solvable problems. Perfect for recursion.
 * 
 * When you think about solving this problem for a small number of steps, finding
 * the solution is pretty simple- for 0 steps there is 1 distinct way, for 1 step
 * there is also 1 distinct way, for 2 steps there is 2 distinct ways and yada, yada, yada.
 * 
 * However, this problem quickly gets out of hand as the number of distinct possibilities seems
 * to grow exponentially.
 * 
 * To apply a dynamic problem solving solution, we know we could find the solution if we knew 
 * the number of distinct step patterns for one step and two steps below the number of steps
 * we're currently solving for.
 * 
 * It would then be pretty simple, and seemingly elegant just to apply recursion to our problem.
 * Setting the base cases for when n=0 (return 1) and n=1 (return 1). Our recursive case would then 
 * call our function twice- once for n-1 and once for n-2.
 * 
 * The one drawback of this approach is it quickly gets to be too many calls for event the computer.
 * As n gets larger, the amount of calls grows by a 2^n relationship.
 * 
 * We can get around this by applying either a memoization technique (if we want to use a hashmap/object)
 * Or an array (where we can just store the relevant value in an index position and therefore access it in constant time)
 */