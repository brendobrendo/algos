/**
 * Use selection sort to sort an (unordered) array
 * When you think of selection sort, think of finding a max or min value that
 * is to the right of (or is) the index of the current iteration
 * @param {Number Array} arr unordered array of numbers
 * @returns {Number Array} ordered array of numbers
 * Time complexity: O(N^2)
 */
selectionSort = (arr=[]) => {
    for (let i=0; i<arr.length-1; i++) {
        // In each iteration, find the smallest value including and to the
        // right of the current index
        // Create a variable to hold the index of the smallest value to the
        // right of the index of the current iteration.
        let currentMinIndex = i;
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j]<arr[currentMinIndex]) currentMinIndex = j;
        }

        // After finding the smallest value to the right of (and including)
        // the index of the current iteration, swap the values
        let temp = arr[i];
        arr[i] = arr[currentMinIndex]
        arr[currentMinIndex] = temp;
    }
    return arr
}

console.log(selectionSort([6,5,9,1,3]));