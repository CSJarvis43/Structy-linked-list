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