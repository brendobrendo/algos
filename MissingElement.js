/**
 * Find the kth missing element in a sorted array
 * @param {array} arr sorted array of ints
 * @param {number} k kth missing integer from the sorted array
 * @returns {number} 
 */
function missingElement(arr, k) {
    
    // find missing vals in first half of the sorted array
    let midIndex = Math.ceil(arr.length/2);
    let startMissingVals = arr[midIndex-1] - arr[0];

    // base case
    if (startMissingVals === k) {
        console.log('got to ====')
        return (arr[midIndex-1] -1)
    }

    if (startMissingVals < k) {
        console.log('got to <')
        return missingElement(arr.slice(midIndex-1), k-startMissingVals);
    }

    if (startMissingVals > k) {
        console.log('got to >')
        return missingElement(arr.slice(0, midIndex+1), k)
    }
}

console.log(missingElement([4,7,9,10], 1))