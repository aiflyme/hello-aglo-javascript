//16 392. 判断子序列  含DP方案
var isSubsequence = function (s, t) {
    // let res = '',
    //     j = 0,
    //     k = 0;
    // for (let i = 0; i < s.length; i++) {
    //     while (j < t.length) {
    //         if (s[i] === t[j]) {
    //             res += s[i];
    //             //j = k;
    //             j++;
    //             break;
    //         }
    //         j++;
    //     }
    // }
    // return s === res ? true : false;

    let i = 0,
        j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
};

const s = 'abc',
    t = 'ahbgdc';
const isSubsequences = isSubsequence(s, t);
console.log(isSubsequences);

//17 876. 链表的中间结点
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    //单指针法
    // let i = 0;
    // let p = head;
    // while (p) {
    //     i++;
    //     p = p.next;
    // }
    // let j = i % 2 === 1 ? Math.floor(i / 2) : i / 2;
    // (p = head), (i = 0);
    // while (p) {
    //     if (i === j) return p;
    //     i++;
    //     p = p.next;
    // }

    //快慢指针法
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return flow;
};

// 初始化各个节点
const n0 = new ListNode(1);
const n1 = new ListNode(3);
const n2 = new ListNode(2);
const n3 = new ListNode(5);
const n4 = new ListNode(4);
// 构建节点之间的引用
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;

const middleNodes = middleNode(n0);
console.log(middleNodes);

//18 160. 相交链表
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let i = 0,
        j = 0;
    let p = headA,
        q = headB;
    while (p !== null) {
        i++;
        p = p.next;
    }
    while (q !== null) {
        j++;
        q = q.next;
    }
    let k = i > j ? i - j : j - i;
    if (i > j) {
        while (k > 0) {
            headA = headA.next;
            k--;
        }
    } else {
        while (k > 0) {
            headB = headB.next;
            k--;
        }
    }

    while (headA && headB) {
        if (headA === headB) return headA;
        else {
            headA = headA.next;
            headB = headB.next;
        }
    }
};
