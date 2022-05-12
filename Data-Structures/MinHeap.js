class MinHeap {
    constructor() {
        this.values = [];
        return this;
    }

    /**
     * Get parent node's index
     * @param {Number} index index of node we need the parent index of
     * @returns {Number | Null} index of the parent node or null if we are
     * using the root node
     */
    parent(index) {
        if (index===0) return null;
        return Math.floor((index-1)/2);
    }

    /**
     * Get index of node's left child
     * @param {Number} index index of node we need left node index for 
     * @returns {Number | Null} index of left child node or 
     * null if there isn't a left child
     */
    leftChild(index) {
        if (this.isLeaf(index)) return null;
        return (index*2)+1;
    }

    /**
     * 
     * @param {Number} index index of node we need right node index for 
     * @returns {Number | Null} index of right child or null if there isn't a
     * right child
     */
    rightChild(index) {
        if (this.isLeaf(index)) return null;
        return (index*2)+2;
    }

    isLeaf(index) {
        return (index >= Math.floor(this.values.length/2) 
                && index < this.values.length);
    }

    swap = (index1, index2) => {
        //[[this.values[index1]], this.values[index2]] = [[this.values[index2]], [this.values[index1]]]
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
        return this;
    }

    add = (val) => {
        // Push new val into the heap array
        this.values.push(val);
        // heapify to the correct position to maintain min heap properties
        this.heapifyUp(this.values.length-1);
        return this;
    }

    /**
     * Helper function to position new element into correct index
     * and maintain min heap property
     * @param {Number} idx Index of element to heapify
     * @returns {Min Heap} updated heap with min heap properties
     */
    heapifyUp = (idx) => {
        let parentIdx = this.parent(idx);
        
        // While val of current index is less than val at index of parent
        // swap the vals to maintain the min heap property
        while (this.values[idx]<this.values[parentIdx]) {
            this.swap(idx, parentIdx);
            [idx, parentIdx] = [parentIdx, this.parent(parentIdx)]
        }

        return this;
    }

    /**
     * @returns {Number | Null} returns and removes the min val from the heap
     * or null if there are no values in the heap
     */
    removeMin = () => {
        // First swap the min element with the last element in the array
        this.swap(0, this.values.length-1);
        // capture the min element with .pop() method
        const minValue = this.values.pop();
        // heapify down the swapped element so that the min heap properties
        // are maintained
        this.heapifyDown();
        
        return minValue;
    }

    getSmallChild = (idx) => {
        if (this.isLeaf(idx)) return this;

        if (((idx*2)+3)>this.values.length) return (idx*2) + 1;

        if (this.values[this.leftChild(idx)]
            < this.values[this.rightChild(idx)]) {
            return this.leftChild(idx);
        } else return this.rightChild(idx);
    }

    /**
     * Helper function for removeMin
     * @returns {Min Heap} (Min) Heapified array
     */
    heapifyDown = () => {
        let currentIdx = 0;
        let childIdx = this.getSmallChild(currentIdx);

        console.log(this.values[currentIdx], this.values[childIdx], "hello");
        while (this.values[currentIdx] > this.values[childIdx] 
                || !childIdx) {
            if (!childIdx) break;
            this.swap(currentIdx, childIdx);
            [currentIdx, childIdx] = [childIdx, this.getSmallChild(childIdx)];
        }

        return this;
    }
}

let newMinHeap = new MinHeap();
console.log(newMinHeap.values);
newMinHeap.add(4);
console.log(newMinHeap.values);
newMinHeap.add(5);
console.log(newMinHeap.values);
newMinHeap.add(2);
console.log(newMinHeap.values);
console.log(newMinHeap.removeMin());
console.log(newMinHeap.values);
newMinHeap.add(7);
console.log(newMinHeap.values);
newMinHeap.add(21);
console.log(newMinHeap.values);
newMinHeap.add(1);
console.log(newMinHeap.values);
newMinHeap.removeMin();
console.log(newMinHeap.values);
newMinHeap.removeMin();
console.log(newMinHeap.values);
newMinHeap.removeMin();
console.log(newMinHeap.values);
newMinHeap.removeMin();
console.log(newMinHeap.values);
newMinHeap.removeMin();
console.log(newMinHeap.values);