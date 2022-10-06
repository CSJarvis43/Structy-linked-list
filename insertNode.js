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

// Structy Iterative


const insertNodeStructy = (head, value, index) => {
    if (index === 0) {
        const newHead = new Node(value)
        newHead.next = head;
        return newHead;
    }

    let count = 0;
    let current = head;

    while (current !== null) {
        if (count === index - 1) {
            const temp = current.next;
            current.next = new Node(value);
            current.next.next = temp;
        }

        count++;
        current = current.next;
    }

    return head;
}




// Charlie's Recursive

const insertNodeRecursive = (head, value, index, count = 0) => {

    if (head === null) return null;
    if (index === 0) {
        newHead = new Node(value);
        newHead.next = head;
        return newHead;
    }

    if (count === index - 1) {
        const next = head.next;
        head.next = new Node(value);
        head.next.next = next;
    } else {
        insertNode(head.next, value, index, count + 1)
        return head;
    }
}







const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(insertNode(a, 'm', 1))
// a -> b -> c -> d -> m
