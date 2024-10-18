//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

//08 LCR 136. 删除链表的节点

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head === null) return null;

    if (head.val === val) return head.next;

    let newHead = head;

    while (newHead.next) {
        if (newHead.next.val === val) {
            newHead.next = newHead.next.next;
            break;
        }

        newHead = newHead.next;
    }
    return head;
};

const head08_0 = new ListNode(-3);
const head08_1 = new ListNode(5);
const head08_2 = new ListNode(-99);
// const head08_3 = new ListNode(9);

head08_0.next = head08_1;
head08_1.next = head08_2;
// head08_2.next = head08_3;

const val08 = -99;

const deleteNodeRS = deleteNode(head08_0, val08);
console.log(deleteNodeRS);

//09 LCR 140. 训练计划 II
console.log('No.09 LCR 140. 训练计划 II');
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlanII = function (head, cnt) {
    //method 1
    // const arr = [];
    // while (head) {
    //     arr.unshift(head);
    //     head = head.next;
    // }
    // console.log(arr);
    // for (let i = 0; i < arr.length; i++) {
    //     if (i === cnt - 1) return arr[i];
    // }
    // return null;

    //method 2
    let fast = head,
        slow = head;
    for (let i = 0; i < cnt; i++) {
        fast = fast.next;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};

const head09_0 = new ListNode(2);
const head09_1 = new ListNode(4);
const head09_2 = new ListNode(7);
const head09_3 = new ListNode(8);

head09_0.next = head09_1;
head09_1.next = head09_2;
head09_2.next = head09_3;

const cnt09 = 1;

const trainingPlanIIRS = trainingPlanII(head09_0, cnt09);
console.log(trainingPlanIIRS);

//10 LCR 142. 训练计划 IV
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
console.log('No.10 LCR 142. 训练计划 IV');
var trainningPlanIV = function (l1, l2) {
    //Method 01
    // if (!l1) return l2;
    // if (!l2) return l1;
    // if (!l1 && !l2) return null;
    // let l3, cur;
    // if (l1.val <= l2.val) {
    //     l3 = l1;
    //     l1 = l1.next;
    // } else {
    //     l3 = l2;
    //     l2 = l2.next;
    // }
    // cur = l3;
    // while (l1 || l2) {
    //     //有L1 无L2
    //     //有L1 有L2
    //     //无L1 有L2
    //     if (l1 && l2) {
    //         if (l1.val <= l2.val) {
    //             l3.next = l1;
    //             l1 = l1.next;
    //             l3 = l3.next;
    //         } else {
    //             l3.next = l2;
    //             l2 = l2.next;
    //             l3 = l3.next;
    //         }
    //     } else if (l2 && !l1) {
    //         l3.next = l2;
    //         l2 = l2.next;
    //         l3 = l3.next;
    //     } else if (l1 && !l2) {
    //         l3.next = l1;
    //         l1 = l1.next;
    //         l3 = l3.next;
    //     }
    // }
    // return cur;

    //Method 2
    let cur = new ListNode(0),
        dum = cur;
    while (l1 && l2) {
        if (l1.val >= l2.val) {
            cur.next = l2;
            l2 = l2.next;
        } else {
            cur.next = l1;
            l1 = l1.next;
        }
        cur = cur.next;
    }
    cur.next = l1 ? l1 : l2;
    return dum.next;
};

const head10_0 = new ListNode(2);
const head10_1 = new ListNode(2);
const head10_2 = new ListNode(4);

const head10_3 = new ListNode(1);
const head10_4 = new ListNode(3);
const head10_5 = new ListNode(4);

head10_0.next = head10_1;
head10_1.next = head10_2;

head10_3.next = head10_4;
head10_4.next = head10_5;

const l110 = head10_0,
    l210 = head10_3;
const trainningPlanIVRS = trainningPlanIV(l110, l210);
console.log(trainningPlanIVRS);

//11 LCR 171. 训练计划 V
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
console.log('No.11 LCR 171. 训练计划 V');
var getIntersectionNode = function (headA, headB) {
    let a = headA,
        b = headB;
    while (a !== b) {
        console.log(a.val, b.val, a.next, b.next);
        console.log(a.next === null);
        a = a.next !== null ? a.next : headB;
        b = b.next !== null ? b.next : headA;
    }
    return a;
};
//[4 1 8 4 5] [5 0 1 8 4 5]
const head11_0 = new ListNode(4);
const head11_1 = new ListNode(1);

const head11_2 = new ListNode(8);
const head11_3 = new ListNode(4);
const head11_4 = new ListNode(5);

const head11_5 = new ListNode(5);
const head11_6 = new ListNode(0);
const head11_7 = new ListNode(1);

head11_0.next = head11_1;
head11_1.next = head11_2;
head11_2.next = head11_3;
head11_3.next = head11_4;

head11_5.next = head11_6;
head11_6.next = head11_7;
head11_7.next = head11_2;
head11_2.next = head11_3;
head11_3.next = head11_4;

const getIntersectionNodeRS = getIntersectionNode(head11_0, head11_5);
console.log(getIntersectionNodeRS);

//12 LCR 139. 训练计划 I
/**
 * @param {number[]} actions
 * @return {number[]}
 */
console.log('No.12 LCR 139. 训练计划 I');
var trainingPlanI = function (actions) {
    //method 1
    // const odd = [],
    //     even = [];
    // for (let i = 0; i < actions.length; i++) {
    //     if (actions[i] % 2 === 1) odd.push(actions[i]);
    //     else even.push(actions[i]);
    // }
    // return [...odd, ...even];

    //method 2
    let i = 0,
        j = actions.length - 1;
    while (i < j) {
        while (i < j && (actions[i] & 1) === 1) i++;
        while (i < j && (actions[j] & 1) === 0) j--;
        // tmp = actions[i];
        // actions[i] = actions[j];
        // actions[j] = tmp;
        [actions[j], actions[i]] = [actions[i], actions[j]];
    }
    return actions;
};

const actions12 = [2, 16, 3, 5, 13, 1, 16, 1, 12, 18, 11, 8, 11, 11, 5, 1];
const trainingPlanIRS = trainingPlanI(actions12);
console.log(trainingPlanIRS);

//13 LCR 179. 查找总价格为目标值的两个商品
/**
 * @param {number[]} price
 * @param {number} target
 * @return {number[]}
 */
console.log('No.13 LCR 179. 查找总价格为目标值的两个商品');
var twoSum = function (price, target) {
    let i = 0,
        j = price.length - 1,
        sum = 0;
    while (i < j) {
        sum = price[i] + price[j];

        if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        } else return [price[i], price[j]];
    }
    return null;
};
const price13 = [3, 9, 12, 15],
    target13 = 18;
const twoSumRS = twoSum(price13, target13);
console.log(twoSumRS);

//14 LCR 181. 字符串中的单词反转

/**
 * @param {string} message
 * @return {string}
 */
console.log('No.14 LCR 181. 字符串中的单词反转');
var reverseMessage = function (message) {
    message = message.trim();
    let i = (j = message.length - 1),
        res = [];

    while (i >= 0) {
        while (i >= 0 && message[i] !== ' ') i--;
        res.push(message.substring(i + 1, j + 1) + ' ');
        while (i >= 0 && message[i] === ' ') i--;
        j = i;
    }
    return res.join('').trim();
};

const message14 = 'the sky is blue';
const reverseMessageRS = reverseMessage(message14);
