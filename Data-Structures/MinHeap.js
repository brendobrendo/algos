class MinHeap {
    constructor() {
        this.values = [];
        return this;
    }

    parent(index) {
        return Math.floor((index-1)/2);
    }

    leftChild(index) {
        return (index*2) + 1;
    }

    rightChild(index) {
        return (index*2) + 2;
    }

    isLeaf(index) {
        index >= Math.floor()
    }
}