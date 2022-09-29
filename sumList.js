// Charlie's Iterative Solution

const sumList = (head) => {
    let result = 0;
    let current = head;

    while (current !== null) {
        result += current.val;
        current = current.next;
    }

    return result;
}