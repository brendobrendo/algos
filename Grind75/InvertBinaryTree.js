class BinaryTreeNode {
    constructor (val=0, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    /**
     * Console logs the tree in an easy to read array format
     * For example if tree is rootNode = 4, leftNode = 3, rightNode = 1
     * console logs [4,3,1]
     * Another example if tree is rootNode = 4, leftNode = 1, rightNode = 3
     * console logs [4,1,3]
     */
    printTree = () => {
        if (this.val === 0) console.log([]);

        let queue = [this];
        let outputArray = [];

        while (queue.length > 0) {
            let newNode = queue.shift();
            outputArray.push(newNode.val);

            if (newNode.left) queue.push(newNode.left);
            if (newNode.right) queue.push(newNode.right);
        }

        console.log(outputArray);
    }

    /**
     * Updates the Binary Tree with a single new node
     * @param {Integer} val Val for the new node
     * @returns {BinaryTreeNode} Binary Tree with the new node inserted
     * into the correct position
     */
    addNode = (val) => {
        findPlacement(this, val);
    }

    /**
     * Inverts the binary tree
     * THIS IS NOT WORKING FOR SOME REASON
     * IT'S NOT RETURNING UPDATED AND INVERTED TREE
     * ALTHOUGH INSIDE THE WHILE LOOP I CAN SEE THE 
     * CHILD NODES HAVE SWAPPED
     * THIS ALGO ALSO WORKS IN LEETCODE.....
     * @returns 
     */
    invertTree = () => {
        if (!this) return this;

        let queue = [this];
        let runningNode = this;

        while (queue.length > 0) {
            // swap the child nodes
            let temp = runningNode.left;
            runningNode.left = runningNode.right;
            runningNode.right = temp;

            // push child nodes into queue if they are not null
            if (runningNode.left !== null) queue.push(runningNode.left);
            if (runningNode.right !== null) queue.push(runningNode.right);
            runningNode = queue.shift();
            this.printTree();
        }
    }
}

/**
 * Creates a binary tree from an array of integers
 * @param {Integer Array} inputArray Array of integers to insert into a Binary Tree
 * @returns new Binary Tree comprised of the elements from the input array
 */
let createBinaryTree = (inputArray) => {
    if (inputArray.length === 0) return BinaryTreeNode();

    let rootNode = new BinaryTreeNode(inputArray[0]);
    
    for (let i=1; i<inputArray.length; i++) {
      // Find where the new Node should be placed
      findPlacement(rootNode, inputArray[i]);
    }

    return rootNode;
}

/**
 * Helper function to find the placement to insert a new node into an 
 * existing Binary Tree
 * @param {BinaryTreeNode} rootNode Starting node of a binary tree
 * @param {Integer} val val of the new node
 * @returns {BinaryTreeNode} updated binary tree
 */
let findPlacement = (rootNode, val) => {
    let queue = [rootNode];
    let runningNode = rootNode;

    while(runningNode !== null) {
        if (runningNode.left === null) {
            runningNode.left = new BinaryTreeNode(val);
            break
        } else if (runningNode.right === null) {
            runningNode.right = new BinaryTreeNode(val);
            break
        } else {
            queue.push(runningNode.left);
            queue.push(runningNode.right);
            runningNode = queue.shift();
        }
    }
}

let newTree = createBinaryTree([4,5,6]);
newTree.printTree();
newTree.addNode(90);
newTree.printTree()
newTree.invertTree();
newTree.printTree();