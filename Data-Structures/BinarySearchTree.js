// CREATE NODE AND BST CLASSES
class Node {
    constructor(val) {
        this.val = val;
        this.leftNode = null;
        this.rightNode = null;

        return this;
    }
}

class BST {
    constructor() {
        /**
         * @type {BSTode | null}
         */
        this.root = null;
    }

    /**
     * Checks if the BST contains any nodes
     * @returns {Boolean}
     */
    isEmpty() {
        return (this.root === null);
    }

    /**
     * Insert a new node into the BST
     * @param {Number} value value of the newNode we want to insert
     */
    insert(value) {
        let newNode = new Node(value);

        // If root empty, set new node as the root
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    /**
     * Helper method for insert
     * @param {Node} root node whose value we're comparing to the newNode we're inserting
     * @param {Node} newNode newNode we want to insert into the BST
     * @returns {BST} returns the BST with the newly inserted node
     */
    insertNode(root, newNode) {
        // Check if the newNode's value is less than the root's
        if (newNode.val < root.val) {
            // If it is, first check if there is a leftNode
            if (!root.leftNode) {
                // If there isn't, insert the newNode in the leftNode spot
                root.leftNode = newNode;
            } else {
                // If there is a leftNode, make recursive call using the leftNode
                // in place of the rootNode
                this.insertNode(root.leftNode, newNode);
            }        
        } else {
            // If newNode is not less than the root
            // First check if there is a rightNode
            if (!root.rightNode) {
                // If there isn't, insert the newNode as the rightNode
                root.rightNode = newNode;
            } else {
                // If there is, make recursive call using the rightNode in place of root
                this.insertNode(root.rightNode, newNode);
            }
        }      
        return this
    }

    remove(value) {
        if (this.isEmpty()) {
            return "The BST is empty"
        } else {
            this.removeNode(this.root, value)
        }
    }

    /**
     * Helper function for remove
     * @param {Node} root node we're currently evaluating in our traversal
     * @param {Number} value the value that we're searching and want to delete
     * in our BST traversal
     * @returns {BST | Node}
     */
    removeNode(root, value) {
        // compare the current node's val to the value we'll be deleting
        // If it is greater than the search val, make recursive call and move to
        // the left node
        if (root.val > value) {
            root.leftNode = this.removeNode(root.leftNode, value);
            return root
        } else if (root.val < value) {
            root.rightNode = this.removeNode(root.rightNode);
            return root;
        } else {
            // If we find the value then delete the node
            // If the node has no children nodes then we can just delete it
            if (!root.leftNode && !root.rightNode) {
                root.val = null;
                return root;
            }
            // If it only has a left node, then make the left node
            // the new root/curret node
            if (!root.rightNode) {
                root = root.leftNode
                return root
            }
            // If it only has a rightNode, then replace the root/current node
            // with its rightNode
            if (!root.leftNode) {
                root = root.rightNode;
                return root
            }

            else {
                // Use the helper function to find the minVal
                // on the right part of the subtree and insert it into the the 
                // current/root node's val
                let minRight = this.findMinNode(root.rightNode);
                root.val = minRight.val;

                // Make sure to delete the minRight node properly
                root.right = this.removeNode(root.right, minRight.val);
                return root
            }
        }
    }

    findMinNode(root) {
        if (!root.left) {
            return root;
        } else {
            return this.findMinNode(root.left)
        }
    }

    /**
     * toArrPreorder
     * Depth First Search (DFS)
     * DFS: Preorder: (currentNode, left, right)
     * Converts this BST into an array following the depth first 
     * search preorder
     * @param {Node} node The current node we are on during traversal
     * @param {Array<number>} vals The vals that have been found so far
     * @returns {Array<number>} The vals in DFS Preorder once all the
     * nodes are visited
     * Time: O(n) linear, every node is visited
     */
    toArrPreorder(node=this.root, vals=[]) {
        if (node !== null) {
            vals.push(node.val);
            this.toArrPreorder(node.leftNode, vals);
            this.toArrPreorder(node.rightNode, vals);
        }
        return vals;
    }

    /**
     * DFS InOrder: (left, currNode, right)
     * Converts this BST into an array following DFS InOrder
     */
    toArrInorder(node=this.root, vals=[]) {
        if (node !== null) {
            this.toArrInorder(node.leftNode, vals);
            vals.push(node.val);
            this.toArrInorder(node.rightNode, vals)
        }
        return vals;
    }

    /**
     * DFS Postorder (left, right, currNode)
     * @param {Node} node the node we are on during traversal
     * @param {Array<number>} vals the vals we have seen so far
     * @returns {Array<number>} The vals in DFS Postorder once all nodes
     * have been visited
     */
    toArrPostorder(node=this.root, vals=[]) {
        if (node !== null) {
            this.toArrPostorder(node.leftNode, vals);
            this.toArrPostorder(node.rightNode, vals);
            vals.push(node.val);
        }
        return vals;
    }

    /**
     * Returns the number of nodes in the BST
     * @returns {Number} the number of nodes in the BST
     */
    size() {
        return this.toArrPostorder().length
    }
}

const emptyTree = new BST();
const oneLevelTree = new BST();
oneLevelTree.root = new Node(4);
const twoLevelTree = new BST();
twoLevelTree.root = new Node(5);
twoLevelTree.root.leftNode = new Node(4);
twoLevelTree.root.rightNode = new Node(9);

const testTree = new BST();
testTree.insert(5);
testTree.insert(4);
testTree.insert(7);

console.log(testTree.toArrPreorder());
console.log(testTree.toArrInorder());
console.log(testTree.size());


