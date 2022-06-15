// Given an integer array of unique elements, return all possible subsets
// (the power set)

/**
 * @param {Integer Array} nums unordered array of numbers
 * @param {Integer} depth level of the decision tree for the current recursive
 * call
 * @param {Integer Array} subset Array of integers for the current subset
 * being generated
 * @param {Array of Integer Arrays} results holds all the subset arrays
 * @returns {Array of Integer Arrays} Array of all subsets
 * Time Complexity: O(N*2^N);
 * Space Complexity: O(N*2^N);
 */
let subsets = (nums, depth=0, subset=[], results=[]) => {
    // Approach will be a decision tree with the depth being equal to the
    // number of elements in the input list
    
    // Base case
    if (depth === nums.length) {
        // Don't push the subset in until it's reached the bottom level
        results.push(subset)
    } else {
        // Recursive case
        subsets(nums, depth+1, subset, results)
        subsets(nums, depth+1, [...subset, nums[depth]], results)
    }
    return results;
}

console.log(subsets([1,2,3]).length)

