// Charlie's Iterative Solution

const linkedListFind = (head, target) => {
    let current = head;

    while (current !== null) {
        if (current.val === target) {
            return true;
        } else {
            current = current.next;
        }
    }

    return false;
}

// Charlie's Recursive Solution

const linkedListFindRecursive = (head, target) => {
    
    if (head === null) {
        return false;
    } else if (head.val === target) {
        return true;
    } else {
        return linkedListFindRecursive(head.next, target);
    }
}

// Structy Iterative

const linkedListFindStructy = (head, target) => {
    let current = head;

    while (current !== null) {
        if (current.val === target) return true;
        current = current.next;
    }

    return false
}

// Structy Recursive

