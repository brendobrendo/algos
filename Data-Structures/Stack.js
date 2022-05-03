/**
 * A stack is a linear last-in-First-Out data structure
 * which means that the last element to be added to the stack will be the
 * first element to be removed
 * It has 3 main operations: push, pop, and peek
 */

class ArrayStack {
    constructor(items=[]) {
        // an array of all the elements in our stack
        this.items = items;
        return this;
    }

    /**
     * 
     * @param {Number} n new value to insert into the stack
     * @returns {Stack} returns the stack with the newly inserted element 
     */
    push(n) {
        this.items.push(n);
        return this;
    }

    /**
     * @returns {Number} the item that was popped from the stack
     */
    pop() {
        return this.items.pop();
    }

    /**
     * @returns {Number} last item in the stack without removing it
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * @returns {Boolean} True if the stack is empty, false otherwise
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * 
     * @returns {Number} the number of items in the stack
     */
    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items);
        return this;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        /**
         * @type {Node}
         */
        this.next = null;
        return this;
    }
}


class LinkedListStack {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    push(n) {
        const newNode = new Node(n);
        
        if (this.isEmpty()) this.head = newNode;

        else {
            const holdNode = this.head;
            this.head = newNode;
            newNode.next = holdNode;
        }

        return this;
    }

    /**
     * Removes head from the stack
     * @returns {String | Node} the old head of the stack
     */
    pop() {
        if (this.isEmpty()) return "No elements to pop";

        const oldHead = this.head;
        this.head = this.head.next;
        // separate old head node from the stack
        oldHead.next = null;
        return oldHead;
    }

    /**
     * Shows the val of the head node without removing it from the stack
     * @returns {String | Number} the val of the head node
     */
    peek() {
        if (this.isEmpty()) return "There are no elements in the stack";

        return this.head.val;
    }

    /**
     * Prints the stack
     * @returns {Void} Doesn't return anything. Console logs the stack
     */
    print() {
        console.log(this);
    }
}


let newStack = new LinkedListStack();
newStack.push(5);
newStack.push(2);
newStack.push(1);
newStack.push(18);
newStack.print();
