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