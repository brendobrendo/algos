var isValid = function (s) {
    // Edge Cases
    if (s.length % 2 !== 0) return false

    // Initialize an empty stack
    // Forgot to explain what a stack was and why I was using it
    let stack = [];

    // Initialize closed character types
    // Improvement: When I was updating the hash table, didn’t explain what I was doing
    let closedCharacters = { '}':'{', ')':'(', ']':'[' }

    // Improvement: While I was coding this, didn’t talk through what I was coding
    for (let i = 0; i < s.length; i++) {
        if (!closedCharacters.hasOwnProperty(s[i])) {
            stack.push(s[i]);
        } else {
            if (closedCharacters[s[i]] === stack[stack.length - 1]) {
                stack.pop()
            } else {
                return false
            }
        };
    }
    return (stack.length === 0);
}

console.log(isValid('()')) // true
console.log(isValid('()(')) // false
console.log(isValid('(){}')) // true
console.log(isValid('()[]{}')) // true