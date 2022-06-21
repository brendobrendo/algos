let maxSubarray = (nums) => {
    // Initialize variables
        // Beginning max value to first element in input array
        // because the prompt specifies that at least one element will be in the input array
        // and to return the sum of a subarray of at least one element long.
    let maxSum = nums[0];
    // This variable will hold a running sum as we iterate through the elements in the input array
    let sum = 0;

    for (let i=0; i<nums.length; i++) {
        // Get the sum of the new element and the sum variable
        let newSum = sum + nums[i];
        // Check this value against our maxSum value, and replace
        // maxSum with newSum if newSum is greater
        if (newSum > maxSum) maxSum = newSum;
        // If sum is less than 0, than we start summing from a new element index point
        sum = Math.max(0, newSum)
    }

    // The prompt doesn't call for returning the subarrray, only the maxSum of a contiguous subarray
    return maxSum;
}

console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubarray([1])) // 1
console.log(maxSubarray([5,4,-1,7,8])) // 23
