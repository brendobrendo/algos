/**
 * 
 */
twoSum = (nums, target) => {
    let newSet = new Set();
    
    nums.forEach(val => {
        newSet.add(val);
    })

    

    return newSet;
};

console.log(twoSum([5,6,7], 11));