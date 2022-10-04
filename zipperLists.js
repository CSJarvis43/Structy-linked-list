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



// Recursive solution initial attempt, excedding max call stack, need guidance
// Does not function


//     const zipperListsRecursive = (head1, head2, count = 0) => {

//         let result = head1;
        
//         if (head1 === null && head2 === null) {
//             if (count % 2 === 0) {
//                 result.next = head2;
//                 return zipperLists(head1.next, head2, count + 1)
//             } else {
//                 result.next = head1;
//                 return zipperLists(head1, head2.next, count + 1)
//         } 
//             } else if (head1 !== null) {
//             return result.next = head1;
//         } else if (head2 !== null) {
//             return result.next = head2;
//         }

//         return head1
        
        
    
// }

//Structy Recursive Solution

const zipperListsRecursive = (head1, head2) => {

    if (head1 === null && head2 === null) return null
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    const n1 = head1.next;
    const n2 = head2.next;

    head1.next = head2;

    head2.next = zipperListsRecursive(n1, n2);

    return head1;
}