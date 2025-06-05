//array queue

class arrayQueue {
    #queue = [];
    #front = 0;
    #size = 0;

    constructor(capacity) {
        this.#queue = new Array(capacity);
    }

    push(data) {
        if (this.#size === this.capacity) {
            console.log('list is full');
            return;
        }
        const rear = (this.#front + this.size) % capacity;
        this.#queue[rear] = data;
        // this.#queue.push(data);
        this.#size++;
    }

    pop() {
        // if (this.#size === 0) throw new Error('Empty queue');
        // const popData = this.#queue.shift();

        const num = this.peek();
        this.#front = (this.#front + 1) % this.capacity;

        this.#size--;
        return num;
    }

    peek() {
        if (this.#size === 0) throw new Error('Empty queue');
        return this.#queue[this.#front];
    }

    size() {
        return this.#size;
    }

    is_empty() {
        return this.#size === 0;
    }

    toArray() {
        return this.#queue;
    }
}

const queue = new arrayQueue();
console.log(queue.is_empty());

queue.push(1);
queue.push(3);
queue.push(2);
queue.push(5);
queue.push(4);
console.log('queue = ');
console.log(queue.toArray());

queue.pop();
queue.pop();

console.log(queue.toArray());
console.log(queue.size());
console.log(queue.is_empty());
console.log(queue.peek());

//linked_list
import { ListNode } from '../modules/ListNode.js';

class linkedListQueue {
    #head;
    #rear;
    #size = 0;

    constructor() {
        this.#head = null;
        this.#rear = null;
    }

    peek() {
        if (!this.#head) throw new Error('Empty queue');
        return this.#head.val;
    }

    push(data) {
        const node = new ListNode(data);

        if (!this.#head) {
            this.#head = node;
            this.#rear = node;
        } else {
            // while (head && head.next === null) {
            //     head.next = node;
            //     node = node.next;
            // }
            this.#rear.next = node;
            this.#rear = node;
        }
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
        return this.#size === 0;
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

const link_queue = new linkedListQueue();
console.log('linked_list queue:');

console.log(link_queue.size());
console.log(link_queue.is_empty());
link_queue.push(1);
link_queue.push(3);
link_queue.push(2);

console.log(link_queue.size());
console.log(link_queue.is_empty());
console.log(link_queue.toArray());

console.log(link_queue.peek());

console.log(link_queue.pop());

console.log(link_queue.pop());
// console.log(link_queue.size());
console.log(link_queue.toArray());

// console.log(link_queue.size());
console.log(link_queue.size());

console.log(link_queue.is_empty());
link_queue.push(5);
link_queue.push(4);
console.log(link_queue.peek());
console.log(link_queue.toArray());
console.log(link_queue.size());
