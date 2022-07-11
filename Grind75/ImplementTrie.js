class TrieNode {
    constructor() {
        this.children = {};
        this.endNode = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode();
    };

    /** 
     * @param {string} word
     * @return {void}
     */
    insert = function(word) {
        if (!word) return this;
        
        let cur = this.root;
        
        for (let i=0; i<word.length; i++) {
            const newNode = new TrieNode();
            
            if (!cur.children.hasOwnProperty(word[i])) {
                cur.children[word[i]] = newNode;
            }
            
            cur = cur.children[word[i]]
        }
        
        cur.endNode = true; 
    };

    /** 
     * @param {string} word
     * @return {boolean}
     */
    search = function(word) {
        let cur = this.root;
        
        for (let i=0; i<word.length; i++) {
            if (cur.children.hasOwnProperty(word[i])) {
                cur = cur.children[word[i]]
            } else return false
        }
        
        return cur.endNode
        
    };

    /** 
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith = function(prefix) {
        let cur = this.root;
        
        for (let i=0; i<prefix.length; i++) {
            if (cur.children.hasOwnProperty(prefix[i])) {
                cur = cur.children[prefix[i]]
            } else return false
        }
        
        return true;
    };
}

let newTrie = new Trie();
console.log(newTrie.root.children);