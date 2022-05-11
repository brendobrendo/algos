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
        if (isLeaf(index)) return null;
        return (index*2)+1;
    }

    /**
     * 
     * @param {Number} index index of node we need right node index for 
     * @returns {Number | Null} index of right child or null if there isn't a
     * right child
     */
    rightChild(index) {
        if (isLeaf(index)) return null;
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
        while (this.values[idx]>this.values[parentIdx]) {
            this.swap(idx, parentIdx);
            [idx, parentIdx] = [parentIdx, this.parent(parentIdx)]
        }

        return this;
    }
}