// A weighted graph is comprised of nodes (such as locations on a map) and
// edges (paths between nodes). The space/time between nodes is the weight
// of the edge.

/**
 * Weighted graph used to represent locations (nodes) on a map and the spaces
 * between them (edges)
 */
class Graph {
    constructor() {
        this.nodes = [];
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
console.log(map.adjacencyList['UMC']);