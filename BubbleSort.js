/**
 * Sort an (unsorted) array using bubble sort
 * Iterate through each element in the array, 
 * but on each element, we will iterate backwards starting at the element's index value
 * to the beginning of the array.
 * During this backward iteration, we will compare the element to the element
 * at the index value right before it. If the left value is greater than the
 * right value, then swap the values in the array.
 * @param {Number Array} arr array of values to sort
 * @returns {Number Array} sorted array of values (smallest to greatest) 
 * Time: O(N^2)
 * Space: O(N)
 */
function bubbleSort(arr=[]) {
    // Edge case: if the array has length of one or less, it is already sorted
    if (arr.length <= 1) return arr;

    // Create two loops
    // Outer loop will iterate from the beginning element of the array to the
    // final element in the array.
    for (let i=1; i<arr.length; i++) {
        // the inner loop will do a backwards iteration, starting at the
        // elment preceding the element we're on in the outer iteration,
        // and iterate backwards. 
        for (let j=i-1; j>=0; j--) {
            // if arr[i] < arr[j], swap the values
            if (arr[i]<arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}

/**
 * Bubble sort with a while loop instead
 * @param {*} arr 
 * @returns 
 */
function bubbleSort2(arr=[]) {
    if (arr.length <= 1) return arr;

    let endIndex = arr.length - 1;

    while (endIndex >= 0) {
        for (let i=1; i<=endIndex; i++) {
            if (arr[i]<arr[i-1]) {
                let temp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = temp;
            }
        }
        endIndex -= 1;
    }
    return arr;
}

console.log(bubbleSort2([2,1,5,4]));