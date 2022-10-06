// Charlie's Iterative Solution


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function longestStreak(head) {
    if (head === null) return 0;

    let current = head;
    let streak = 0;
    let max = 0;
    let streakValue = head.val;

    while (current !== null) {
        if (current.val === streakValue) {
            streak++;
            current = current.next;
            if (streak > max) {
                max = streak;
            }
        } else {
            streakValue = current.val;
            streak = 1;
            current = current.next;
        }
    }

    return max;
}








const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

console.log(longestStreak(a)) // 3


// Structy Iterative

const longestStreakStructy = (head) => {

    let maxStreak = 0;
    let currentStreak = 0;
    let current = head;
    let prevVal = null;

    while (current !== null) {
        if (current.val === prevVal) {
            currentStreak++;
        } else {
            currentStreak = 1;
        }

        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }

        prevVal = current.val;
        current = current.next;
    }

    return maxStreak;
}