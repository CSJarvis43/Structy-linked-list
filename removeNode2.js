// Remove node practice

//Iterative 

const removeNode = (head, targetVal) => {

    if (head.val === targetVal) return head.next;

    let current = head;
    let prev = null;
    
    while (current !== null) {
        if (current.val === targetVal) {
            prev.next = current.next;
            break;
        }
        prev = current;
        current = current.next;
    }
    
    return head;

    return dummyHead.next;
}