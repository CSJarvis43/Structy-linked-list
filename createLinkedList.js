// charlies iterative


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}



const createLinkedList = (values) => {
    let current = 0;
    let dummyHead = new Node(null);
    let tail = dummyHead;

    while (current < values.length) {
        tail.next = new Node(values[current])
        current++;
        tail = tail.next;
    }

    return dummyHead.next;
}


console.log(createLinkedList(["h", "e", "y"]))