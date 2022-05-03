class Node {
    constructor(val) {
        this.val = val;
        this.height = 0;
        this.parent = null;
        this.leftNode = null;
        this.rightNode = null;

        return this
    }

    getLeftSubtreeHeight() {
        return this.leftNode ? this.leftNode.height : -1;
    }

    getRightSubtreeHeight() {
        return this.rightNode ? this.rightNode.height : -1;
    }
}

class AVLTree {
    constructor() {
        /**
         * @type {Node | null}
         */
        this.root = null;
    }

    /**
     * 
     * @returns {Boolean} True if the root node is null, false otherwise
     */
    isEmpty () {
        return this.root === null;
    }

    /**
     * 
     * @param {Number} newVal new val to insert
     * @returns {AVLTree} returns new AVLTree with the new node
     */
    insert(newVal) {
        // Create node with the new val
        let newNode = new Node(newVal);

        // If the AVL is empty, you can insert the new node as the root
        if (this.isEmpty()) return this.root = newNode;

        // Traverse through the AVL to find where new Node should be inserted
        // by using a helper function
        return this.insertNode(this.root, newNode)
    }

    /**
     * Helper function for insert()
     * @param {Node} node node we're currently checking to find where to place new value 
     * @param {Node} newNode new value that we want to insert into the AVL
     * @returns {BST} returns BST, not necessarily a balanced BST/AVL 
     */
    insertNode(node, newNode) {
        // Compare val of newNode to the val of current node in our traversal
        // If it's less than, check the left node / left subtree of the 
        // current node

        if (newNode.val < node.val) {
            // Check if the currentNode has a leftNode
            // If it doesn't, insert the newNode there
            if (!node.leftNode) {
                node.leftNode = newNode;
                newNode.parent = node;
                return this;
            } else {
            // If if does, make recursive call using the leftChild node as the
            // current node
                this.insertNode(node.leftNode, newNode);
                return this;
            }
        } else {
            // Check if the currentNode has a rightNode
            // If not, insert newNode into the rightNode position
            if (!node.rightNode) {
                node.rightNode = newNode;
                newNode.parent = node;
                return this;
            } 
            // Else, make recursive call using the rightNode
            this.insertNode(node.rightNode, newNode);
            return this;
        }
    }
    
    /**
     * INSERTION PSEUDOCODE
     * 1) Insert the new element into the BST using BST insertion logic
     * 2) check the balance factor for every node
     * 3) If the balance factor for a node is 0, 1, or -1 then that node
     * is balanced and you can move to the next one
     * 4) Else, perform the suitable rotation to make it balanced
     */

    /**
     * DELETION PSEUDOCODE
     * 1) Delete the specified element using BST deletion logic
     * 2) Check the balance factor for every node
     * 3) If the the balance factor for a node is 0, 1, or -1, then that node is
     * balanced and you can move on to the next one
     * 4) Else, perform the suitable rotation to make it balanced
     */
}

const newAVL = new AVLTree();
newAVL.insert(4);
console.log(newAVL);
newAVL.insert(5);
newAVL.insert(3);
newAVL.insert(6);
console.log(newAVL.root.leftNode);


