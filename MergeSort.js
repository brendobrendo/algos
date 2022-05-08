
/**
 * Helper function to concat two ordered arrays
 * @param {Number Array} array1 ordered array to concat
 * @param {Number Array} array2 ordered array to concat
 * @returns {Number Array} concatanated ordered array
 */
merge = (array1=[], array2=[]) => {
    let returnArr = [];

    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] < array2[0]) returnArr.push(array1.shift());
        else returnArr.push(array2.shift())
    }

    if (array1.length>0) {
        for (let i=0; i<array1.length; i++) {
            returnArr.push(array1[i]);
        }
    }

    if (array2.length>0) {
        for (let i=0; i<array2.length; i++) {
            returnArr.push(array2[i]);
        }
    }

    return returnArr;
}

/**
 * Order an (unordered) array in ascending order using the MergeSort method.
 * When you think of MergeSort think of breaking down an array into single pieces,
 * then concating together in ordered way....
 * @param {Number Array} arr Array of numbers to be sorted in ascending order
 * @return {Number Array} Array after merge sort is performed
 */
mergeSort = (arr=[]) => {
    // Base case
    if (arr.length <= 1) return arr;

    // Recursive case
    // Make recursive calls to break down the input arr into a leftHalf and a
    // right half
    const midIndex = Math.floor(arr.length/2);
    let leftHalf = arr.slice(0,midIndex);
    let rightHalf = arr.slice(midIndex);

    leftHalf = mergeSort(leftHalf);
    rightHalf = mergeSort(rightHalf);

    return merge(leftHalf, rightHalf);
}



console.log(mergeSort([4,2,5,9,9,3]));