/**
 * @param {String} inputString Input string
 * @returns {(String)} Returns the largest substring (with no repeating characters)
 */
longestNonRepeatingSubstring = (inputString) => {
    // Edge Cases - If string is empty or null
    if (inputString.length === 0 || inputString === null) return "EMPTY STRING";

    // Set variables- Two pointers and a max string
    let i = 0; // Beginning index of substring
    let j = 0; // Ending index of substring
    let hashSet = new Set(); // Stores unique characters for current iteration
    let max = "";
    let currSubstring = "";

    // Increase j everytime a new character has not been seen
    while (j<inputString.length) {
        // Increase i everytime new character has been seen in curr iteration
        if (!hashSet.has(inputString[j])) {
            hashSet.add(inputString[j]);
            currSubstring += inputString[j];
            
            if (currSubstring.length > max.length) {
                max = currSubstring;
            }

            j++
        } else {
            hashSet.clear();
            currSubstring = "";
            i++;
        }
    }

    return max;
}

console.log(longestNonRepeatingSubstring("animanimel"));