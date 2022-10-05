// Charlie's Iterative

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const isUnivalueList = (head) => {
    let current = head;
    let value = head.val;

    while (current !== null) {
        if (current.val === value) {
            current = current.next
        } else return false;
    }

    return true;
}


const u = new Node(2);
const v = new Node(2);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 2 -> 2 -> 2

console.log(isUnivalueList(u)) // true