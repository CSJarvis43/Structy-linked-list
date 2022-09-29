// Charlie's 

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