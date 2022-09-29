// Charlie's Iterative

const getNodeValue = (head, index) => {
    let current = head;
    let i = 0;

    while (current !== null) {
        if (i === index) {
            return current.val;
        }
        current = current.next;
        i++;
    }

    return current;
}

// Charlie's Recursive 

const getNodeValueRecursive = (head, index) => {

    if (head === null) return head;
    if (index === 0) return head.val

    return getNodeValueRecursive(head.next, index - 1);
}

// Structy Recursive

const getNodeValueStructyRecursive = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;
    return getNodeValueStructyRecursive(head.next, index -1);
}

// Structy Iterative

const getNodeValueStructy = (head, index) => {
    let current = head;
    let count = 0;
    while (current !== null) {
        if (count === index) return current.val;
        count += 1;
        current = current.next;
    }
    return null;
}