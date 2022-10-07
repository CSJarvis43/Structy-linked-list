// From Scratch:

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addListsRecursive = (head1, head2) => {


    if (head1 === null && head2 === null) return null;

    const val1 = head1 === null ? null : head1.val;
    const val2 = head2 === null ? null : head2.val;

    const next1 = head1 === null ? null : head1.next;
    const next2 = head2 === null ? null : head2.next;

    const sum = val1 + val2;

    const sumNode = new Node(sum);

    sumNode.next = addListsRecursive(next1, next2);

    return sumNode;

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