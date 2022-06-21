/**
 * 
 */
let productOfArray = (nums) => {

    let result = [];
    let productToNow = 1;
    for (let i=0; i<nums.length; i++) {
        result[i] = productToNow
        productToNow *= nums[i];
    }

    productToNow = 1;
    for (let j=nums.length-1; j>=0; j--) {
        result[j] *= productToNow;
        productToNow *= nums[j];
    }
    return result;
}

console.log(productOfArray([1,2,3,4])) // [24,12,8,6]
console.log(productOfArray([2,4,6,8])) // 

/**
 * Post-Mortem
 * Out of the box solution that I needed to see online
 * Remember, if you control the number of times you iterate over an array,
 * you still have o(n) time.
 * 
 * Iterating backwards over the loop can also produce interesting results.
 * 
 * Originally tried a multiplication approach where I reverse engineered
 * a division operation. 
 * [Step 1] Iterate over entire array to find the overall product
 * [Step 2] Iterate through each element to perform reverse-division operation
 * [Step 2a] Multiply current iteration element by 1. Create while loop. 
 * If product of our element and one is less than the entire product array,
 * add one to the multiplication factor and test again
 * [2b] If the product of the element and multiplication factor equals the
 * overall product, break
 * Find product of our element and the multiplication factor -1.
 * Subtract this answer from the overall product 
 * Replace the element in the array with this value
 * 
 * [Cases where this approach faild]
 * [1] If zeroes were included in the array
 * [2] If negative numbers were included in the array
 */