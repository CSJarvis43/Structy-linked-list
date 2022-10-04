// Charlie's Iterative SOlution



const zipperLists = (head1, head2) => {


    let res = head1;
    let c1 = head1.next;
    let c2 = head2;
    let count = 0;

    while (c1 !== null && c2 !== null) {
        if (count % 2 === 0) {
            res.next = c2;
            c2 = c2.next;
        } else {
            res.next = c1;
            c1 = c1.next;
        }

        res = res.next;
        count++;
    }
    
    if (c1 !== null) res.next = c1;
    if (c2 !== null) res.next = c2;

    return head1;
};