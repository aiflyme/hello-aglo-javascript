/* 基于环形数组实现的双向队列 */
class ArrayDeque {
    #arr;
    #front;
    #size;
    #extentRadio;

    constructor(capacity) {
        this.#arr = new Array(capacity);
        this.#front = 0;
        this.#size = 0;
        this.#extentRadio = 2;
    }

    capacity() {
        return this.#arr.length;
    }

    index(i) {
        return (i + this.capacity()) % this.capacity();
    }

    push_first(data) {
        if (this.capacity() === this.#size) {
            // console.log('Deque is full');
            // return;
            this.extend_capacity();
        }

        this.#front = this.index(this.#front - 1);
        this.#arr[this.#front] = data;

        this.#size++;
    }

    push_last(data) {
        if (this.capacity() === this.#size) {
            // console.log('Deque is full');
            // return;
            this.extend_capacity();
        }

        const rear = this.index(this.#front + this.#size);
        this.#arr[rear] = data;
        this.#size++;
    }

    pop_first() {
        const num = this.peek_first();
        this.#front = this.#front + 1;

        this.#size--;

        return num;
    }

    pop_last() {
        const num = this.peek_last();
        this.#size--;
        return num;
    }

    peek_first() {
        if (this.is_empty()) throw new Error('empty deque');
        return this.#arr[this.#front];
    }

    peek_last() {
        if (this.is_empty()) throw new Error('empty deque');
        return this.#arr[this.#front + this.#size - 1];
    }

    extend_capacity() {
        const newArr = new Array(this.capacity() * this.#extentRadio);
        for (let i = 0, j = this.#front; i < this.#size; i++, j++) {
            newArr[i] = this.#arr[this.index(j)];
        }
        this.#arr = newArr;
        this.#front = 0;
    }

    size() {
        return this.#size;
    }

    is_empty() {
        return this.#size === 0;
    }

    toArray() {
        const arr = [];
        for (let i = 0, j = this.#front; i < this.#size; i++, j++) {
            arr[i] = this.#arr[this.index(j)];
        }
        return arr;
    }
}

const deque = new ArrayDeque(5);
console.log(deque.is_empty());
console.log(deque.toArray());

deque.push_last(1);
deque.push_last(3);
deque.push_last(2);
deque.push_first(5);
deque.push_first(4);
deque.push_first(6);
deque.push_last(7);

console.log('deque = ');
console.log(deque.toArray());

console.log(deque.size());
console.log(deque.is_empty());

deque.pop_first();
console.log(deque.toArray());

deque.pop_last();
console.log(deque.toArray());

//linked_list
class ListNode {
    prev; // 前驱节点引用 (指针)
    next; // 后继节点引用 (指针)
    val; // 节点值

    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class Linkedlist_deque {
    #front;
    #rear;
    #size;

    constructor() {
        this.#front = null;
        this.#rear = null;
        this.#size = 0;
    }

    pushLast(data) {
        const node = new ListNode(data);
        if (this.#size === 0) {
            this.#front = node;
            this.#rear = node;
        } else {
            //双向链接
            this.#rear.next = node;
            node.prev = this.#rear;
            //尾结点改为node
            this.#rear = node;
        }
        this.#size++;
    }

    pushFirst(data) {
        const node = new ListNode(data);
        if (this.#size === 0) {
            this.#front = node;
            this.#rear = node;
        } else {
            //双向链接
            this.#front.prev = node;
            node.next = this.#front;
            //头结点改为node
            this.#front = node;
        }
        this.#size++;
    }

    popFirst() {
        const num = this.peekFirst();

        let temp = this.#front.next;
        if (temp !== null) {
            //清空双向链接
            temp.prev = null;
            this.#front.next = null;
        }
        //更新新的头链接
        this.#front = temp;

        this.#size--;
        return num;
    }

    popLast() {
        const num = this.peekLast();

        let temp = this.#rear.prev;
        if (temp !== null) {
            //清空双向链接
            temp.next = null;
            this.#rear.prev = null;
        }
        //更新新的头链接
        this.#rear = temp;
        this.#size--;
        return num;
    }

    peekFirst() {
        if (this.isEmpty()) return 0;
        return this.#front.val;
    }

    peekLast() {
        if (this.isEmpty()) return 0;
        // return this.#size === 0 ? null : this.#rear.val;
        return this.#rear.val;
    }

    isEmpty() {
        return this.#size === 0;
    }

    size() {
        return this.#size;
    }

    toArray() {
        const arr = [];
        let node = this.#front;
        while (node !== null) {
            arr.push(node.val);
            node = node.next;
        }
        return arr;
    }

    print() {
        console.log('[' + this.toArray().join(', ') + ']');
    }
}

/* Driver Code */
/* 初始化双向队列 */
const linkedListDeque = new Linkedlist_deque();
console.log('双向队列是否为空 = ' + linkedListDeque.isEmpty());
linkedListDeque.pushLast(3);
linkedListDeque.pushLast(2);
linkedListDeque.pushLast(5);
console.log('双向队列 linkedListDeque = ');
linkedListDeque.print();

/* 访问元素 */
const peekFirst = linkedListDeque.peekFirst();
console.log('队首元素 peekFirst = ' + peekFirst);
const peekLast = linkedListDeque.peekLast();
console.log('队尾元素 peekLast = ' + peekLast);

/* 元素入队 */
linkedListDeque.pushLast(4);
console.log('元素 4 队尾入队后 linkedListDeque = ');
linkedListDeque.print();
linkedListDeque.pushFirst(1);
console.log('元素 1 队首入队后 linkedListDeque = ');
linkedListDeque.print();

/* 元素出队 */
const popLast = linkedListDeque.popLast();
console.log('队尾出队元素 = ' + popLast + '，队尾出队后 linkedListDeque = ');
linkedListDeque.print();
const popFirst = linkedListDeque.popFirst();
console.log('队首出队元素 = ' + popFirst + '，队首出队后 linkedListDeque = ');
linkedListDeque.print();

/* 获取双向队列的长度 */
const size = linkedListDeque.size();
console.log('双向队列长度 size = ' + size);

/* 判断双向队列是否为空 */
const isEmpty = linkedListDeque.isEmpty();
console.log('双向队列是否为空 = ' + isEmpty);

const arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrTest[0], arrTest.length);
