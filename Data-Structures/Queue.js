class Queue {
    constructor(vals=[]) {
        this.vals = vals;
        return this;
    };

    /**
     * Inserts new element to the back of the queue
     * @param {Number} val new value to be inserted into the queue 
     * @returns {Queue} Queue after insertion of the new element
     */
    insert(val) {
        this.vals.push(val);
        return this;
    };

    /**
     * @returns {Void} Doesn't return anything.
     * Just console.logs the next item in the queue
     * without modifying the queue
     */
    peek() {
        console.log(this.vals[0]);
    };

    
    /**
     * Returns and removes the next time in/from the queue
     * @returns {Number} Next item in the queue
     */
    queuePop() {
        return this.vals.shift();
    }
};

let newQueue = new Queue([5,4,6]);
console.log(newQueue);
newQueue.insert(7);
console.log(newQueue.queuePop());
console.log(newQueue);