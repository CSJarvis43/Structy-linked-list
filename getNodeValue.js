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
    let i = 0;

    if (head === null) return head;
    if (i === index) return head.val;
    
    i++;

    return getNodeValueRecursive(head, index);
}

// Structy Iterative