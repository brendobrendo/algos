let validPalindrome = (s) => {
    // undercase all characters and remove all spaces and punctuation
    // regex would be useful here
    s = s.replace(/[^a-z0-9]/gi, '');
    s = s.toLowerCase();
    
    // create new variable to comparison a new string
    // create copy of s (s2) then pop out of that string and concat into comparisonString
    let comparisonString = ""
    for (let i=s.length-1; i>=0; i--) {
        let newCharacter = s[i];
        comparisonString += newCharacter
    }
    
    // Compare s to the comarisonString => If the same return true, if not return false
    return (s === comparisonString) 
}

/**
 * POST-MORTEM
 * I'm weak on my string functionality. Especially regex
 * Solved in a little over 15
 * Had to google search for the .replace and regex function
 * Had to google search for the .toLowerCase function
 * First attempt, didn't reassign s after performing the .replace and .toLowerCase functions
 */