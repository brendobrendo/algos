// Initially, one might think to implement a max heap using nodes with
// pointers, as you might implement a Binary Search Tree. *However,
// the power of a heap, comes from using an array structure instead*.



// The root element of a binary heap (when represented in an array) is 
// Arr[0]
// The index of a node's parent value is Arr[Math.Floor((i-1)/2)]
// The index of a node's left child is Arr[(2*i)+1]
// The index of a node's right child is Arr[(2*i) + 2]
// In a complete binary tree the number of leaves is, (numberOfNodes + 1) / 2
// The index position of where the leaves start is Math.floor(numberOfNodes / 2)

// One of the most common implementations of a max heap is a priority queue
// A priority queue is a data structure that allows an element to be given
// a priority, the element with the highest priority is returned before
// all the other elements

// CREATE MAXHEAP CLASS

class MaxHeap {
    constructor(){
        this.values = [];
    }

    /**
     * Finds the index of the parent node
     * @param {number} index index of current node to find parent node index of
     * @returns {number} index of the parent node
     * Time complexity: O(1)
     */
    parent(index) {
        return Math.floor((index-1) / 2);
    }

    /**
     * Finds the index of the left child node
     * @param {number} index index of current node
     * @returns {number} index of current node's left child
     * Time complexity: O(1)
     */
    leftChild(index) {
        return (index*2) + 1;
    }

    /**
     * Finds the index of the right child node
     * @param {number} index index of the current node
     * @returns {number} index of right child node
     * Time complexity: O(1)
     */
    rightChild(index) {
        return (index*2) + 2;
    }

    /**
     * Determines if node is a leaf or not
     * @param {number} index index of node we're currently on 
     * @returns {Boolean} true if node is a leaf (has at least 1 child nodes), false otherwise
     */
    isLeaf(index) {
        return (
            index >= Math.floor(this.values.length / 2) &&
            index <= this.values.length -1
        )
    }

    /**
     * Swaps the position of 2 nodes in the heap
     * @param {number} index1 index of first node to be swapped
     * @param {number} index2 index of second node to be swapped
     */
    swap(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }

    /**
     * Inserts a new number into the heap returning a new and ordered heap
     * @param {number} element 
     * @return
     */
    add(element) {
        // add element to the end of the heap
        this.values.push(element);
        // move the element up until its in the correct position
        this.heapifyUp(this.values.length - 1);
        return this;
    }

    /**
     * Puts specific node into proper position of the heap
     * to maintain heap properties
     * @param {number} index 
     * @returns {MaxHeap} this heap
     * Time complexity: O(log n) - Worst case scenario, you will have to perform this
     * operation h (the height of the heap) times which is log n.
     */
    heapifyUp(index) {
        let currentIndex = index,
            parentIndex = this.parent(currentIndex);

        // while we haven't reached the root node and the current element is 
        // greater than its parent node
        while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
            // swap
            this.swap(currentIndex, parentIndex);
            // move up the binary heap
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
        return this;
    }

    /**
     * Extract max value
     * @returns max value from the heap and removes it from the heap 
     */
    extractMax() {
        if (this.values.length < 1) return "this heap is empty";

        // get max and last element
        const max = this.values[0];
        const end = this.values.pop();

        // reassign first element to the last element
        this.values[0] = end;
        // heapify down until element is back i its correct position
        this.heapifyDown(0);

        // return the max
        return max;
    }

    /**
     * Reorganizes heap after the max value is extracted to maintain
     * heap properties
     * @param {number} index 
     * Time Complexity: O(log n) - Worst case you will have to peform this function
     * h (number of heap levels and log n) times because thats the max amount
     * of times you would swap before reaching a leaf node
     */
    heapifyDown(index) {
        // check if the node at index has children because if it doesn't,
        // then there is ow way for it to move down further
        if (!this.isLeaf(index)) {
            // get indices of children
            let leftChildIndex = this.leftChild(index),
                rightChildIndex = this.rightChild(index),

                // start largest index at the parent index
                largestIndex = index;
            
            if (this.values[leftChildIndex] > this.values[largestIndex]) {
                // reassign largest index to left child index
                largestIndex = leftChildIndex;
            }

            if (this.values[rightChildIndex] >= this.values[largestIndex]) {
                // reassign largest index to right child index
                largestIndex = rightChildIndex;
            }

            // if the largest index is not the parent index
            if (largestIndex != index) {
                this.swap(index, largestIndex);
                // recursively move down the heap
                this.heapifyDown(largestIndex);
            }
        }
        
        return this;
    }

    /**
     * Orders unordered array and converts into a max heap
     * @param {array} array array of values to sort
     * Time Complexity: Apparently O(n) although I don't understand why
     */
    buildHeap(array) {
        this.values = array;
        // since leaves start at floor (nodes / 2) index, we work from the leaves up the heap
        for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
            this.heapifyDown(i);
        }
        // this works because we are working from the leaves up
        return this;
    }

    /**
     * Returns max value of the heap WITHOUT removing it
     * @returns {number} max value of the heap WITHOUT removing it
     */
    peek() {
        return this.values[0];
    }

    /**
     * Prints node info for non-leaf nodes
     */
    print() {
        let i = 0;
        while (!this.isLeaf(i)) {
            console.log("PARENT:", this.values[i]);
            console.log("LEFT CHILD", this.values[this.leftChild(i)]);
            console.log("RIGHT CHILD:", this.values[this.rightChild(i)]);
            i++;
        }
    }
}

let myFirstHeap = new MaxHeap();
myFirstHeap.buildHeap([4,5,1,2,6,9,10]);
myFirstHeap.print();

// Heap Sort: Heap Sort uses Binary Heap to sort an array in O(nLogn) time

// extractMax(): Removes the max element from a MaxHeap.
// Time complexity of this operation is O(Logn) because the
// operation needs to maintain the heap property (by calling heapify())
// after removing the root

// increaseKey(): Increases value of key. The time complexity of this
// operation is O(Logn). if the increase in the key value of a node is
// greater than the parent node, then we need to traverse up and swap
// with the parent to fix the violated maxHeap property

// insert(): Inserting a new key takes O(Logn) time. We add a new key
// at the end of the tree. If the new key is greater than its parent,
// then we need to traverse up and swap the two keys to fix the violated
// maxHeap property

// delete(): Takes O(Logn) time. 
