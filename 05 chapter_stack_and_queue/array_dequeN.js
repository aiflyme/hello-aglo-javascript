/* 基于环形数组实现的双向队列 */
class ArrayDeque {
    #arr;
    #head;
    #size;

    constructor(capacity) {
        this.#arr = new Array(capacity);
        this.#head = 0;
        this.#size = 0;
        // console.log(this.#arr);
    }

    capacity() {
        return this.#arr.length;
    }

    index(i) {
        return (i + this.capacity()) % this.capacity();
    }

    push_first(data) {
        if (this.#size === this.capacity()) {
            console.log('list is full');
            return;
        }
        this.#head = this.index(this.#head - 1);
        this.#arr[this.#head] = data;
        this.#size++;
    }

    push_last(data) {
        if (this.#size === this.capacity()) {
            console.log('list is full');
            return;
        }
        const rear = this.index(this.#head + this.#size);
        this.#arr[rear] = data;
        this.#size++;
    }

    pop_first() {
        const num = this.peek_first();
        this.#head = this.index(this.#head + 1);
        this.#size--;

        return num;
    }

    pop_last() {
        const num = this.peek_last();
        this.#size--;
        return num;
    }

    peek_first() {
        if (this.#size === 0) throw new Error('Empty deque');
        return this.#arr[this.#head];
    }

    peek_last() {
        if (this.#size === 0) throw new Error('Empty deque');
        const rear = (this.#head + this.#size) / this.capacity;
        return this.#arr[rear];
    }

    size() {
        return this.#size;
    }

    is_empty() {
        return this.#size === 0;
    }

    toArray() {
        const arr = [];
        for (let i = 0, j = this.#head; i < this.#size; i++, j++) {
            arr[i] = this.#arr[this.index(j)];
        }
        return arr;
    }
}

const deque = new ArrayDeque(10);
console.log(deque.is_empty());
console.log(deque.toArray());

deque.push_last(1);
deque.push_last(3);
deque.push_last(2);
deque.push_first(5);
deque.push_first(4);
console.log('deque = ');
console.log(deque.toArray());

// deque.pop();
// deque.pop();

// console.log(deque.toArray());
// console.log(deque.size());
// console.log(deque.is_empty());
// console.log(deque.peek());
