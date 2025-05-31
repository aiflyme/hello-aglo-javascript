class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const n0 = new ListNode(1);
const n1 = new ListNode(3);
const n2 = new ListNode(2);
const n3 = new ListNode(5);
const n4 = new ListNode(4);

//reffence
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(n0);

//insert node
const p = new ListNode(6);

function insert(n0, p) {
    const n1 = n0.next;
    n0.next = p;
    p.next = n1;
}

insert(n0, p);
console.log('Insert node:');
console.log(n0);
console.log(p);

//delete node
function del(n0) {
    if (!n0.next) return;
    const n = n0.next;
    n0.next = n.next;
}
del(n0);
console.log('delete node:');
console.log(n0);

//access node
//find linked_list index node
function access(head, index) {
    for (let i = 0; i < index; i++) {
        if (!head) return null;
        head = head.next;
    }
    return head;
}
console.log('access node:');

const node = access(n0, 3);
console.log(node);

//find element
function find(head, target) {
    let index = 0;
    while (head !== null) {
        if (head.val === target) return index;
        index++;
        head = head.next;
    }
}
console.log('find node:');

const nodeVal = find(n0, 2);
console.log(nodeVal);
