// Charlie's iterative

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const insertNode = (head, value, index) => {

    let current = head;
    let count = 0;
    let newNode = new Node(value)

    if (index === 0) {
        newNode.next = head;
        return newNode;
    }

    while (current !== null) {
        const next = current.next;
        if (index === count + 1) {
            current.next = newNode;
            newNode.next = next;
        }
        count++;
        current = next;
    }

    return head;


}

// Recursive









const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(insertNode(a, 'm', 4))
// a -> b -> c -> d -> m