// Charlie's iterative solution

const linkedListValues = (head) => {
    let current = head;
    let result = [];

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}

// Charlie's recursive solution

const linkedListValuesRecursive = (head) => {
    let result = [];

    fillValues(head, result);

    return result;

}

const fillValues = (head, result) => {
    if (head === null) return;

    result.push(head.val);
    fillValues(head.next, result)
}


// Structy iterative solution

const linkedListValuesStructy = (head) => {
    const values = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    return values
}