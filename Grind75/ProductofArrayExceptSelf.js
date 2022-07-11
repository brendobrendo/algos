/**
 * @param {number[]} nums
 * @return {number[]}
 * Time: O(n) // O(2n) but drop the constant
 * Space: O(n) // At peak, output array is holding array as long as nums
 */
 var productExceptSelf = function(nums) {
    
    // Create output array. Start as an empty array
    let outputArray = [];
    
    outputArray[0] = nums[0]
    let forwardProduct = nums[0];
    
    for (let i=1; i<nums.length-1; i++) {
        outputArray[i] = forwardProduct;
        forwardProduct = outputArray[i]*nums[i]
    }
    
    outputArray[nums.length-1] = forwardProduct;
    
    let backwardsProduct = nums[nums.length-1];
    for (let i=nums.length-2; i>0; i--) {
        outputArray[i] *= backwardsProduct;
        backwardsProduct *= nums[i]; 
    }
    
    outputArray[0] = backwardsProduct;
    
    return outputArray;
};