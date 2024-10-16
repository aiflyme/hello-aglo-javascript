//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
//05 LCR 123. 图书整理 I
var reverseBookList = function (head) {
    //method1 stack
    // if (head === null) return [];
    // const stack = [],
    //     res = [];
    // while (head !== null) {
    //     stack.push(head.val);
    //     head = head.next;
    // }
    // const n = stack.length;
    // for (let i = 0; i < n; i++) {
    //     res.push(stack.pop());
    // }
    // return res;

    //method2 recur
    const res = [];
    const cur = function (head, res) {
        if (head === null) return;
        cur(head.next, res);
        res.push(head.val);
    };
    cur(head, res);
    return res;
};

const list05_01 = new ListNode(3),
    list05_02 = new ListNode(6),
    list05_03 = new ListNode(4),
    list05_04 = new ListNode(1);

list05_01.next = list05_02;
list05_02.next = list05_03;
list05_03.next = list05_04;

//console.log(list05_01);

const reverseBookListRS = reverseBookList(list05_01);
console.log(reverseBookListRS);

//06 LCR 141. 训练计划 III
console.log('No.06 LCR 141. 训练计划 III');
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var trainningPlan = function (head) {
    //method1 iterate
    let pre = null,
        cur = head,
        tmp;
    while (cur) {
        tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
    return pre;

    //method2 recur
    // const recur = function (head, preHead) {
    //     if (head === null) return preHead;
    //     const newHead = recur(head.next, head);
    //     head.next = preHead;
    //     return newHead;
    // };
    // return recur(head, null);
};
const list06_01 = new ListNode(1),
    list06_02 = new ListNode(2),
    list06_03 = new ListNode(3),
    list06_04 = new ListNode(4),
    list06_05 = new ListNode(5);

list06_01.next = list06_02;
list06_02.next = list06_03;
list06_03.next = list06_04;
list06_04.next = list06_05;

const trainningPlanRS = trainningPlan(list06_01);
console.log(trainningPlanRS);

//07 LCR 154. 复杂链表的复制
