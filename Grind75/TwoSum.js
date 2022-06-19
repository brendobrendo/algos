/**
 * Time: O(N) => Actually O(2N) but drop the constants
 * Space: O(N) => Actually O(2N) with the set but drop constants
 */
twoSum = (nums, target) => {
    // Initialize a hashMap to hold the values inside target
    let hashMap = {};

    for (let i=0; i<nums.length; i++) {
        if (target - nums[i] in hashMap) {
            return [hashMap[target-nums[i]], i]
        } else {
            hashMap[nums[i]] = i;
        }
    }

    return false; 
};

console.log(twoSum([5,6,7], 11)); // [0,1]
console.log(twoSum([2,8,1,3], 11)); // [1,3]
console.log(twoSum([5,6,7,1], 7)); // [1,3]
console.log(twoSum([3,2,4], 6)); // [1,2]

/**
 * Post-Mortem
 * Set functions: .add(), .has()
 * Don't forget to add 1 to i during each iteration
 * Remember not to reference variables that were closed in a previous scope
 * I referenced element in the while loop instaed of indexing the nums array
 * Missed edge cases:
 * (1) False positive if target/2 is an element in the array
 * (2) If target/2 is in the array twice. Iterating through each element in the array
 * and adding it as a key (with index as the value) did not work for this reason. Other approach of setting
 * each value as an array of indexes where the value appeared was too messy.
 */
