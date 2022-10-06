// Charlie's Iterative


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


// The below code is hot garbage from first try, going to restart and follow walkthrough

// const addLists = (head1, head2) => {



//     let c1 = head1;
//     let c2 = head2;
    
//     let dummyHead = new Node(null);
//     let dummyCurrent = dummyHead;
    
//     while (c1 !== null && c2 !== null) {
//         dummyCurrent.next = new Node(c1.val + c2.val);
//         dummyCurrent = dummyCurrent.next;
//         c1 = c1.next;
//         c2 = c2.next;
//     }
    
//     if (c1 !== null) dummyCurrent.next = c1;
//     if (c2 !== null) dummyCurrent.next = c2;
    
//     return dummyHead.next;

// }


const addLists = (head1, head2) => {
    const dummyHead = new Node(null);
    let tail = dummyHead;
    let c1 = head1;
    let c2 = head2;
    let carry = 0;

    while (c1 !== null || c2 !== null || carry === 1) {
        const val1 = c1 === null ? null : c1.val;
        const val2 = c2 === null ? null : c2.val;

        const sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        let digit = sum % 10;

        if (c1 !== null) c1 = c1.next;
        if (c2 !== null) c2 = c2.next;

        tail.next = new Node(digit);
        tail = tail.next;
    }

    return dummyHead.next;
}




// Recursive solution


const addListsRecursive = (head1, head2, carry = 0) => {

    if (head1 === null && head2 === null && carry === 0) return null;

    const value1 = head1 === null ? null : head1.val;
    const value2 = head2 === null ? null : head2.val;

    const sum = value1 + value2 + carry;
    const carryDigit = sum > 9 ? 1 : 0;
    const digit = sum % 10;

    const returnNode = new Node(digit);

    const next1 = head1 === null ? null : head1.next;
    const next2 = head2 === null ? null : head2.next;

    returnNode.next = addListsRecursive(next1, next2, carryDigit);

    

    return returnNode;


}




// test_00:
//   621
// + 354
// -----
//   975

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

console.log(addListsRecursive(a1, b1))
// 5 -> 7 -> 9
// test_01:
//  7541
// +  32
// -----
//  7573

const c1 = new Node(1);
const c2 = new Node(4);
const c3 = new Node(5);
const c4 = new Node(7);
c1.next = c2;
c2.next = c3;
c3.next = c4;
// 1 -> 4 -> 5 -> 7

const d1 = new Node(2);
const d2 = new Node(3);
d1.next = d2;
// 2 -> 3 

console.log(addListsRecursive(c1, d1))
// 3 -> 7 -> 5 -> 7
// test_02:
//   39
// + 47
// ----
//   86

const e1 = new Node(9);
const e2 = new Node(3);
e1.next = e2;
// 9 -> 3

const f1 = new Node(7);
const f2 = new Node(4);
f1.next = f2;
// 7 -> 4

console.log(addListsRecursive(e1, f1))
// 6 -> 8
// test_03:
//   89
// + 47
// ----
//  136

const g1 = new Node(9);
const g2 = new Node(8);
g1.next = g2;
// 9 -> 8

const h1 = new Node(7);
const h2 = new Node(4);
h1.next = h2;
// 7 -> 4

console.log(addListsRecursive(g1, h1))
// 6 -> 3 -> 1
// test_04:
//   999
//  +  6
//  ----
//  1005

const i1 = new Node(9);
const i2 = new Node(9);
const i3 = new Node(9);
i1.next = i2;
i2.next = i3;
// 9 -> 9 -> 9

const j1 = new Node(6);
// 6

console.log(addListsRecursive(i1, j1))
// 5 -> 0 -> 0 -> 1