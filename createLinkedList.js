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

// Structy Iterative

const createLinkedListStructy = (values) => {


    const dummyHead = new Node(null);
    let tail = dummyHead;
    for (let val of values) {
        tail.next = new Node(val);
        tail = tail.next;
    }

    return dummyHead.next;

}




// Charlie Recursive


const createLinkedListRecursive = (values) => {

    if (values.length === 0) return null;
    const head = new Node(values[0]);
    head.next = createLinkedListRecursive(values.splice(1))

    return head;

}


// structy recursive


const createLinkedListRecursiveStructy = (values, i = 0) => {


    if (i = values.length) return null;
    const head = new Node(values[i]);
    head.next = createLinkedListRecursiveStructy(values, i + 1)

    return head;

}


console.log(createLinkedListStructy(["h", "e", "y"]))
// h -> e -> y