// Charlie's Iterative

const reverseList = (head) => {

    let current = head;
    let previous = null;

    while (current !== null) {
        const next = current.next;

        current.next = previous;
        previous = current;
        current = next;
    }

    return previous;
}


// Charlie's Recursive 

const reverseListRecursive = (head, prev = null) => {
    if (head === null) return prev;

    const next = head.next;
    head.next = prev;
    
    return reverseListRecursive(next, head)
}