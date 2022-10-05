// Charlie's Iterative

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const mergeLists = (head1, head2) => {
    const placeHolder = new Node(null)
    let tail = placeHolder;


    let c1 = head1;
    let c2 = head2;

    while (c1 !== null && c2 !== null) {
        if (c1.val < c2.val) {
            tail.next = c1;
            c1 = c1.next;
        } else {
            tail.next = c2;
            c2 = c2.next;
        }
        tail = tail.next;
    } 

    if (c1 !== null) tail.next = c1;
    if (c2 !== null) tail.next = c2;

    return placeHolder.next;

}


// Charlie's Recursive


const mergeListsRecursive = (head1, head2) => {

    if (head1 === null && head2 === null) return null
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    if (head1.val < head2.val) {
        const next1 = head1.next;
        head1.next = mergeListsRecursive(next1, head2);
        return head1;
    } else {
        const next2 = head2.next;
        head2.next = mergeListsRecursive(head1, next2);
        return head2;
    }


}





const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

console.log(mergeListsRecursive(a, q))
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 