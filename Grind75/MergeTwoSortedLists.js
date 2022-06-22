class ListNode {
    constructor(val=0, next=null) {
        this.val = val;
        this.next = next;
    }

    printList = () => {
        let outputList = [];
        let runningNode = this;

        while (runningNode !== null) {
            outputList.push(runningNode.val);
            runningNode = runningNode.next;
        }

        console.log(outputList);
    }
}


let mergeSortedLists = (l1, l2) => {
    let list = new ListNode()
    let head = list
    
    while (l1 !== null && l2 !== null) {
	
		// Select the smallest value from either linked list,
		// then increment that list forward.
        if (l1.val < l2.val) {
            head.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            head.next = new ListNode(l2.val)
            l2 = l2.next
        }
        
        head = head.next
    }
    
	// It's possible that one linked list is shorter than the other so we just
	// add on the remainder of the last linked list. It's already sorted :)
    if (l1 !== null)
        head.next = l1
    if (l2 !== null)
        head.next = l2
    
	// return .next because this first element in the linkedlist is empty
    list.next.printList();
    return list.next
}

const node1 = new ListNode(4);
const node2 = new ListNode(5);
const node3 = new ListNode(6);
node1.next = node2;
node2.next = node3;
const nodeA = new ListNode(3);
const nodeB = new ListNode(21);
const nodeC = new ListNode(58);
nodeA.next = nodeB;
nodeB.next = nodeC;

mergeSortedLists(node1, nodeA);


