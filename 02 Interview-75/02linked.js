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
// Definition for a Node.
console.log('No.07 LCR 154. 复杂链表的复制');
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random !== null ? random : null;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (head === null) return null;
    let node = head;
    //Method 1 Map
    // let cur = head;
    // const mapCur = new Map();

    // //复制各节点，原节点->新节点
    // while (cur !== null) {
    //     mapCur.set(cur, new Node(cur.val));
    //     cur = cur.next;
    // }
    // cur = head;
    // //构建引用指向
    // while (cur !== null) {
    //     mapCur.get(cur).next =
    //         mapCur.get(cur.next) === undefined ? null : mapCur.get(cur.next);
    //     mapCur.get(cur).random = mapCur.get(cur.random);
    //     cur = cur.next;
    // }
    // return mapCur.get(head);

    //Method 2
    while (cur !== null) {
        //复制一个节点
        let newCur = new Node(cur.val, cur.next);
        //下一个节点
        // tmpNext = cur.next;
        //newCur.next = cur.next;

        cur.next = newCur;
        cur = newCur.next;
    }

    // 2. 构建各新节点的 random 指向
    cur = head;
    while (cur) {
        if (cur.random !== null) {
            // console.log(cur.random, cur.random.next);
            cur.next.random = cur.random.next;
            // console.log(cur.next.random, cur.random.next);
        }
        cur = cur.next.next;
    }

    // 3. 拆分两链表
    cur = head.next;
    let pre = head;
    let res = head.next;
    while (cur.next) {
        pre.next = pre.next.next;
        cur.next = cur.next.next;
        pre = pre.next;
        cur = cur.next;
    }
    //JS 必须有下行，才能过LEETCODE
    // console.log(pre.next);
    pre.next = null;
    return res;
};
//[7,13,11,10,1];
const list07_05 = new Node(1, null, 0),
    list07_04 = new Node(10, list07_05, 2),
    list07_03 = new Node(11, list07_04, 4),
    list07_02 = new Node(13, list07_03, 0),
    list07_01 = new Node(7, list07_02, null);

const copyRandomListRS = copyRandomList(list07_01);
console.log(list07_01);
