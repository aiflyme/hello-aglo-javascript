//01 Merge Two Sorted Lists

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // let i = 0,
    //     j = 0;
    // const arr = [];
    // while (i < list1.length || j < list2.length) {
    //     if (list1[i] <= list2[j]) {
    //         arr.push(list1[i]);
    //         i++;
    //     } else {
    //         arr.push(list2[j]);
    //         j++;
    //     }
    // }
    // if (i !== list1.length) {
    //     while (i < list1.length) {
    //         arr.push(list1[i]);
    //         i++;
    //     }
    // }
    // if (j !== list2.length) {
    //     while (j < list2.length) {
    //         arr.push(list1[j]);
    //         j++;
    //     }
    // }
    // return arr;

    const prehead = new ListNode(-1);

    let prev = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    prev.next = l1 === null ? l2 : l1;
    // console.log(prehead.next);
    return prehead.next;
};
const l1n0 = new ListNode(1);
const l1n1 = new ListNode(2);
const l1n2 = new ListNode(4);
l1n0.next = l1n1;
l1n1.next = l1n2;

const l2n0 = new ListNode(1);
const l2n1 = new ListNode(5);
const l2n2 = new ListNode(6);
l2n0.next = l2n1;
l2n1.next = l2n2;

// console.log(l1n0, l2n0);

const arrs = mergeTwoLists(l1n0, l2n0);

//02
//Reverse Linked List
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head === null) return head;
    let prev = null;
    //preHead = new ListNode(-1);
    let curr = head;

    while (curr !== null) {
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
        //console.log('222', head, 333, curr);
    }

    return prev;
};

const list2a = new ListNode(1);
const list2b = new ListNode(2);
const list2c = new ListNode(3);
const list2d = new ListNode(4);
const list2e = new ListNode(5);

list2a.next = list2b;
list2b.next = list2c;
list2c.next = list2d;
list2d.next = list2e;

console.log(reverseList(list2a));

var reverseListRecur = function (head) {
    if (head === null || head.next === null) return head;

    const newHead = reverseListRecur(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
console.log(reverseListRecur(list2a));

//05 Copy List with Random Pointer

/** method 1

if(head === null) return null;

    const preHead = new _Node(0);
    let  p = head;
    //const tmp = new _Node(0);
    //在每个原节点后面创建一个新节点
    while(p !== null){
        const newNode = new _Node(p.val,p.next,null);

        //newNode.next = p.next;
        p.next = newNode;

        p = newNode.next;
    }
    //设置新节点的随机节点
    p = head;
    while(p!==null){
        if(p.random!==null){
            //在构建新链表节点（即原始节点cur的复制节点）的random指针时，将新节点的random指针指向与原始节点cur的random指针所指向的节点的下一个节点（即复制节点）
            p.next.random = p.random.next;  //p.random.next就指向
        }
        p = p.next.next;
    }

    p = head;
    let cur = preHead;

    //3 将两个链表分离
    while(p!== null){
        cur.next = p.next;
        cur = cur.next;//p.next亦可
        p.next = cur.next;
        p=p.next;
    }
    return preHead.next;
*/

//method 2
const map = new Map();
map.set(1, 2);
map.set(1, 4);

// console.log(map.get(1));
const headN0 = new ListNode(1);
const headN1 = new ListNode(2);
const headN2 = new ListNode(3);
const headN3 = new ListNode(4);
const headN4 = new ListNode(5);

headN0.next = headN1;
headN1.next = headN2;
headN2.next = headN3;
headN3.next = headN4;

console.log(headN0);

const reverseListResult = reverseList(headN0);
console.log(reverseListResult);
