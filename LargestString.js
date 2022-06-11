/**
 * Given an array of numbers,
 * Return the largest string with those combined numbers
 * @param {Number Array} arr Array of numbers
 * @returns {String} String of the largest permutation of elements in the array
 */

function largestString(arr) {
    // Edge cases - 
    // If array is empty return an empty string
    // If array only has one element, return that element
    if (arr.length === 0 ) return " "
    if (arr.length === 1 ) {
        return String(arr[0]);
    }

    // Initialize empty array which will hold sorted values of input array
    let orderedArray = []

    while (arr.length > 0) {
        let elementToPlace = arr.pop();
        
        let i = 0;
        while (i<=orderedArray.length) {
            let orderedArrayElement = orderedArray[i];
            let compareElementsTest = compareElements(elementToPlace, orderedArrayElement);
            if (compareElementsTest) {
                orderedArray.splice(i, 0, elementToPlace);
                break
            } else if (orderedArray.length===0) {
                orderedArray.push(elementToPlace);
                break
            } else if (i === orderedArray.length -1) {
                orderedArray.push(elementToPlace);
                break
            } else i++;
        } 
    }

    return orderedArray.join("");
}


/**
 * Helper function to place newElement in front of arrayElement
 * @param {Number} newElement 
 * @param {Number} arrayElement 
 * @returns {Boolean} true if the newElement should be placed in front of the 
 * arrayElement
 */
function compareElements(newElement, arrayElement) {
    let newElementString = String(newElement);
    let arrayElementString = String(arrayElement);

    let i = 0;
    while (newElementString[i] && arrayElementString[i]) {
        if (parseInt(newElementString[i]) > parseInt(arrayElementString[i])) {
            return true;
        } else if (parseInt(newElementString[i]) < parseInt(arrayElementString[i])) {
            return false;
        } else {
            i ++;
        }
    }

    // if strings are of uneaul lengths but start with equal values for indexes
    // the both share
    if (!newElementString[i] && !arrayElementString[i]) {
        return true;
    } else if (!newElementString[i] && arrayElementString[i]) {
        if (parseInt(newElementString[i-1])<arrayElementString[i]) {
            return false
        } else return true
    } else {
        if (parseInt(newElementString[i])>=arrayElementString[i-1]) {
            return true
        } else return false;
    }
}


console.log(largestString([5, 4, 6, 45, 736]));






