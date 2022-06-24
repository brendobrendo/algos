let ransomNoteMatcher = (ransomNote, magazine) => {
    let hashMap = {};

    for (let i=0; i<magazine.length; i++) {
        if (hashMap.hasOwnProperty(magazine[i])) {
            hashMap[magazine[i]] += 1;
        } else {
            hashMap[magazine[i]] = 1;
        }
    }

    for (let i=0; i<ransomNote.length; i++) {
        console.log(!hashMap.hasOwnProperty[ransomNote[i]], 'hey there')
        if (!hashMap.hasOwnProperty[ransomNote[i]] || hashMap[ransomNote[i]] === 0) {
            return false;
        } else {
            hashMap[ransomNote[i]] -= 1;
        }
    }

    return true;
}

console.log(ransomNoteMatcher('a', 'b')) // false
console.log(ransomNoteMatcher('a', 'a')) // true
console.log(ransomNoteMatcher('a', 'ba')) // true