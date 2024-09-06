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
        console.log(prev);
        prev = prev.next;
    }

    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    prev.next = l1 === null ? l2 : l1;

    return prehead.next;
};

list1 = new ListNode(1, 2, 4);
list2 = new ListNode(1, 3, 4);
const arrs = mergeTwoLists(list1, list2);
console.log(arrs);

// list1 = [];
// list2 = [];
// const arrs2 = mergeTwoLists(list1, list2);
// console.log(arrs2);

// list1 = [];
// list2 = [0];
// const arrs3 = mergeTwoLists(list1, list2);
// console.log(arrs3);

//02
//Reverse Linked List
