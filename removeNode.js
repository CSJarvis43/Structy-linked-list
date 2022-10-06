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


// Structy iterative

const removeNodeStructy = (head, targetVal) => {
    if (head.val === targetVal) return head.next;

    let prev = null;
    let current = head;

    while (current !== null) {
        if (current.val === targetVal) {
            prev.next = current.next;
            break;
        }

        prev = current;
        current = current.next;
    }

    return head;
}

// Charlie's Recursive

const removeNodeRecursive = (head, target) => {

    if (head === null) return null;
    if (head.val === target) return head.next;

    head.next = removeNodeRecursive(head.next, target)
    
    return head;
}




const node1 = new Node("h");
const node2 = new Node("i");
const node3 = new Node("j");
const node4 = new Node("i");

node1.next = node2;
node2.next = node3;
node3.next = node4;

// h -> i -> j -> i

console.log(removeNodeRecursive(node1, "i"))
// h -> j -> i