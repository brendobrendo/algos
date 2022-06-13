/**
 * Helper function to swap elements
 * @param {Number Array} arr array with elements to be swapped
 * @param {Number} indexLower index of element that needs to be swapped up
 * @param {Number} indexUpper index of element that needs to be swapped down
 * @returns {Number Array} array of elements post swap
 */
swap = (arr=[], indexLower, indexUpper) => {
    const temp = arr[indexLower];
    arr[indexLower] = arr[indexUpper];
    arr[indexUpper] = temp;
    return arr;
}

/**
 * Order an (unordered) array in ascending order using the QuickSort method.
 * When you think of QuckSort, think of pivot and partitioning
 * @param {Number Array} arr Array of numbers to be sorted in ascending order
 * @returns {Number Array} Sorted array
 * Time complexity: O (N Log N)
 */
quickSort = (arr=[]) => {
    // Base cases/edge cases
    if (arr.length<=2) {
        if (arr.length<2) return arr;
        if (arr[0]>arr[1]) return swap(arr, 0, 1);
        else return arr;
    }

    // Recursive Case
    // Partition and Pivot
    let i=0;
    for (let j=0; j<arr.length-1; j++) {
        if (arr[j]<arr[arr.length-1]) {
            swap(arr,i,j);
            i += 1;
        }
    }

    if (i===0) {
        if (arr[0]>arr[arr.length-1]) swap(arr,0,arr.length-1);
        else swap(arr,1,arr.length-1);
    } else swap(arr,i,arr.length-1);

    let newArrayStart = quickSort(arr.slice(0,i));
    let newArrayEnd = quickSort(arr.slice(i));

    return newArrayStart.concat(newArrayEnd);
}

console.log(quickSort([3,7,5,55,22]));


