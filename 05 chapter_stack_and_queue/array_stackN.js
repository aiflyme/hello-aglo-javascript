class arrayStack {
    #arr = new Array();
    push(data) {
        this.#arr.push(data);
    }

    pop(data) {
        const popData = this.#arr.pop();
        return popData;
    }

    peek() {
        return this.#arr.at(-1);
    }

    is_empty() {
        return this.#arr.length === 0;
    }

    size() {
        return this.#arr.length;
    }

    toArray() {
        return this.#arr;
    }
}

const stack = new arrayStack();
console.log(stack.is_empty());

stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);
console.log('stack = ');
console.log(stack.toArray());

stack.pop();
console.log(stack.toArray());
console.log(stack.size());
console.log(stack.is_empty());
console.log(stack.peek());

//linked_list
import { ListNode } from '../modules/ListNode.js';

class linkedListStack {
    #head;
    #size = 0;
    constructor() {
        this.#head = null;
    }

    peek() {
        if (!this.#head) throw new Error('Empty stack');
        return this.#head.val;
    }

    push(data) {
        const node = new ListNode(data);

        node.next = this.#head;

        this.#head = node;
        this.#size++;
    }

    pop() {
        const num = this.peek();
        this.#head = this.#head.next;
        this.#size--;
        return num;
    }

    size() {
        return this.#size;
    }

    is_empty() {
        return this.#head === null;
    }

    toArray() {
        const arr = [];
        let node = this.#head;
        while (node) {
            arr.push(node.val);
            node = node.next;
        }
        return arr;
    }
}

const link_Stack = new linkedListStack();
link_Stack.push(1);
link_Stack.push(3);
link_Stack.push(2);
link_Stack.push(5);
link_Stack.push(4);

console.log('linked_list stack:');
console.log(link_Stack.size());
console.log(link_Stack.is_empty());

console.log(link_Stack.peek());

console.log(link_Stack.toArray());

link_Stack.pop();
link_Stack.pop();
// console.log(link_Stack.size());
console.log(link_Stack.size());

console.log(link_Stack.is_empty());

console.log(link_Stack.peek());

console.log(link_Stack.toArray());
