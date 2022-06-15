// A weighted graph is comprised of nodes (such as locations on a map) and
// edges (paths between nodes). The space/time between nodes is the weight
// of the edge.

/**
 * Nodes can represent places and edges can represent the distance btween 
 * places
 */
class Graph {
    constructor() {
        // An array of all the nodes/places in the graph/map
        this.nodes = [];
        // hashtable of arrays with hashtables
        // keys are the nodes (places) on the graph (map)
        // values are arrays full of key value pairs with the keys being the
        // other nodes the current node is connected to and the value being
        // the distance between those respective nodes
        /**
         * Hashtable of arrays that contain key-value pairs
         * Keys for the main hash table are the nodes/places in the graph/map
         * Values are an array of key-value pairs for each of the adjacent
         * /connected places/nodes
         * For each of these key value pairs, the keys are the adjacent nodes
         * And the values are the spaces/weighted edges between those nodes
         */
        this.adjacencyList = {};
    };

    /**
     * Adds new node into array of nodes
     * @param {String} node Name of location
     */
    addNode(node) {
        this.nodes.push(node);
        this.adjacencyList[node] = [];
    };

    /**
     * Adds edges to to the adjacency list
     * @param {String} node1 
     * @param {String} node2 
     * @param {Number} weight The edge / distance between the two input nodes
     */
    addEdge(node1, node2, weight) {
        this.adjacencyList[node1].push({node:node2, weight:weight});
        this.adjacencyList[node2].push({node: node1, weight:weight});
    }

    /**
     * Removes the edge/connection between two connected nodes in the graph
     * @param {String} node1 
     * @param {String} node2 
     */
    removeEdge(node1, node2) {
        
        let node1AdjacentCities = this.adjacencyList[node1];
        for (let i=0; i<node1AdjacentCities.length; i++) {
            if (node1AdjacentCities[i].node===node2) {
                this.adjacencyList[node1].splice(i,1);
                break;
            } 
        }

        let node2AdjacentCities = this.adjacencyList[node2];
        for (let i=0; i<node2AdjacentCities.length; i++) {
            if (node2AdjacentCities[i].node===node1) {
                this.adjacencyList[node2].splice(i,1);
                break
            } 
        }
    };

    /**
     * Helper function for removeNode
     * @param {String} node node you need the index of 
     */
    getNodeIndex(node) {
        let i = 0;
        while (i<this.nodes.length) {
            if (this.nodes[i]===node) return i;
            i ++
        }

        // Find better solution for return value if node not found.
        return "The node was not found or has already been removed"
    }

    /**
     * Remove node from the graph/map
     * @param {String} node Node/place to be removed from the graph/map
     */
    removeNode(discardNode) {
        // Remove node from its neighbors' adjacency list
        while (this.adjacencyList[discardNode].length>0) {
            let adjacentNode = this.adjacencyList[discardNode][0].node
            this.removeEdge(discardNode, adjacentNode)
        }

        // Remove the node from the map's list of node's
        const nodeIndex = this.getNodeIndex(discardNode);
        // Remove node's  adjacencyList from the map's adjacencyList
        delete this.adjacencyList[discardNode];

        this.nodes.splice(nodeIndex, 1);
    }

    findPathWithDijkstra(startNode, endNode) {
        let times = {};
        let backtrace = {};
        let pq = new PriorityQueue();

        times[startNode] = 0;

        this.nodes.forEach(node => {
            if (node !== startNode) {
                times[node] = Infinity
            }
        });

        pq.enqueue([startNode, 0]);

        while (!pq.isEmpty()) {
            let shortestStep = pq.dequeue();
            let currentNode = shortestStep[0];

            this.adjacencyList[currentNode].forEach(neighbor => {
                let time = times[currentNode] + neighbor.weight;

                if (time < times[neighbor.node]) {
                    times[neighbor.node] = time;
                    backtrace[neighbor.node] = currentNode;
                    pq.enqueue([neighbor.node, time]);
                }
            })
        }
    }
}

/**
 * Queue to hold all the locations/nodes visited while traversing the 
 * map/graph
 */
class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    isEmpty() {
        return (this.collection.length === 0);
    }

    enqueue(element) {
        if (this.isEmpty()){
            this.collection.push(element);
        } else {
            let added = false;
            for (let i=1; i<=this.collection.length; i++) {
                if (element[1] < this.collection[i-1][1]) {
                    this.collection.splice(i-1, 0, element);
                    added = true;
                    break
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    }

    dequeue() {
        let value = this.collection.shift();
        return value;
    }
}

let map = new Graph();
map.addNode("UMC");
map.addNode("ViaTrib");
map.addNode("KerryPark");
map.addNode("SpaceNeedle")
map.addNode("Zeeks");
map.addEdge("UMC", "ViaTrib", 2);
map.addEdge("UMC", "Zeeks", 4);
map.addEdge("KerryPark", "SpaceNeedle", 5);
map.addEdge("ViaTrib", "KerryPark", 2);
map.addEdge("Zeeks", "KerryPark", 4);
map.addEdge("Zeeks", "SpaceNeedle", 6);
map.removeNode("SpaceNeedle");
console.log(map.adjacencyList)