/**
 * @param {array} arr array of integers
 * @param {number} val target value/ integer
 * @returns {boolean} returns true if two numbers within the array sum to target value, false otherwise
 */
let findSumOfTwo = function (arr, val) {
    if (!arr || arr.length < 2) {
        return false;
    }

    let pairFounded = {};


    for (elem in arr) {
        console.log(elem);
        if (pairFounded.hasOwnProperty(arr[elem])) {
            pairFounded[arr[elem]] = pairFounded[arr[elem]] + 1;
        } else {
            pairFounded[arr[elem]] = 1;
        }
    }

    console.log(pairFounded);
    
    for (elem in arr) {
        if (pairFounded.hasOwnProperty(val-arr[elem])) {
            if (((val-arr[elem])/2)=== arr[elem]) {
                if (pairFounded[arr[elem]]>1) return true
            } else return true;
        }
    }

    return false;
};

// Refactor for loops so we we're not iterating over index value

console.log(findSumOfTwo([2, 8, 4, 2, 7, 7, 7], 4));