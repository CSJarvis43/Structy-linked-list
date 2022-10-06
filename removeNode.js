// Charlie's Iterative

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}



const removeNode = (head, target) => {

    if (head.val === target) return head.next;

    let currentNode = head;
    let prevNode = null;

    while (currentNode !== null) {
        const next = currentNode.next;

        if (currentNode.val === target) {
            prevNode.next = next;
            return head;
        }

        prevNode = currentNode;
        currentNode = currentNode.next;
    }



}






const node1 = new Node("h");
const node2 = new Node("i");
const node3 = new Node("j");
const node4 = new Node("i");

node1.next = node2;
node2.next = node3;
node3.next = node4;

// h -> i -> j -> i

console.log(removeNode(node1, "i"))
// h -> j -> i