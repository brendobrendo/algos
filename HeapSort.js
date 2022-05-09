/**
 * Helper function to swap values in unordered array
 * @param {Number Array} arr Array of numbers to be sorted in ascending order
 * @param {Number} lowerIndex Index of value to be swapped up
 * @param {Number} upperIndex Index of value to be swapped down
 * @returns {Number Array} Array of numbers post swap
 */
swap = (arr=[], lowerIndex, upperIndex) => {
    let temp = arr[lowerIndex];
    arr[lowerIndex] = arr[upperIndex];
    arr[upperIndex] = temp;
}

/**
 * @param {Number Array} arr Array to be sorted
 * @param {Number} parentIdx Index of node we'll be comparing child nodes
 * @returns {Number} Index of larger child
 */
getMin = (arr, parentIdx) => {
    let leftChild = (parentIdx*2)+1;
    let rightChild = (parentIdx*2)+2;
    if (arr[leftChild] < arr[rightChild] || rightChild >= arr.length) {
        return leftChild;
    } else return rightChild;
}

ascendingList = (arr=[]) => {
    let returnArray = [];




}

heapSort = (arr=[]) => {
    // Find the first element with a child
    let firstChildIdx = Math.floor((arr.length)/2)-1;

    // Backward loop from the first node with child nodes to the root child
    // Check if max heap properties are being maintained
    // If not swap the greater child node with the node of current iteration
    for (let i=firstChildIdx; i>=0; i--) {
        console.log("index is: ");
        const greaterChild = getMin(arr, i);
        if (arr[i]>arr[greaterChild]) swap(arr,i,greaterChild);
    }

    return arr;
};

console.log(heapSort([6,2,7,1]));

// callByValue = (varOne, varTwo) => {
//     console.log("Inside Call by Value Method");
//     varOne = 100;
//     varTwo = 200;
//     console.log("varOne =" + varOne + "varTwo =" +varTwo);
// }

// let varOne = 10;
// let varTwo = 20;

// console.log("Before Call by Value Method");
// console.log("varOne =" + varOne + "varTwo =" + varTwo);

// callByValue(varOne, varTwo);

// console.log("After Call by Value Method");
// console.log("varOne =" + varOne + "varTwo =" + varTwo);

// callByReference = (varObj) => {
//     console.log("Inside Call by Reference Method");
//     varObj.a = 100;
//     console.log(varObj);
// }

// let varObj = {a:1};

// console.log("Before Call by Reference Method");
// console.log(varObj);

// callByReference(varObj);

// console.log("After Call by Reference Method");
// console.log(varObj);

/**
 * In pass by value, changing the arguement inside the function does not
 * affect the value outside the function.
 * In pass by reference, changing the argument inside the function will change
 * the value of the variable outside the function.
 * In javascript, strings and numbers are pass by value when used as
 * arguments in a function.
 * Arrays and objects are pass by reference.
 */