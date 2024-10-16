//15 LCR 125. 图书整理 II

var CQueue = function () {
    (this.a = []), (this.b = []);
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.a.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.b.length > 0) return this.b.pop();

    if (this.a.length === 0) return -1;

    const n = this.a.length;
    for (let i = 0; i < n; i++) {
        // console.log(i, this.a, this.b, n);
        this.b.push(this.a.pop());
        //console.log(i, this.a, this.b, n);
    }

    return this.b.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 */
var obj = new CQueue();
obj.appendTail(5);
console.log(obj);

obj.appendTail(2);
console.log(obj);
var param_2 = obj.deleteHead();
console.log(param_2, obj);
var param_3 = obj.deleteHead();
console.log(param_3);
//16 LCR 147. 最小栈
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    (this.a = []), (this.b = []);
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.a.push(x);
    if (this.b.length === 0 || this.b[this.b.length - 1] >= x) this.b.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    // if (MinStack.b.length > 0) {
    //     MinStack.b.pop();
    // } else if (MinStack.a.length > 0) {
    //     for (let i = 0; i < MinStack.a.length; i++) {
    //         const aNode = MinStack.a.pop();
    //         MinStack.b.push(aNode);
    //     }
    //     MinStack.b.pop();
    // }
    if (this.a.pop() === this.b[this.b[this.b.length - 1]]) this.b.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.a[this.a.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.b[this.b.length - 1];
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-1);
console.log(minStack);
minStack.getMin();
console.log(minStack);
minStack.top();
console.log(minStack);
minStack.pop();
console.log(minStack);

minStack.getMin();
console.log(minStack);

const arrA = [1, 2, 3, 4],
    arrB = [];

arrB.push(arrA.pop());
arrB.push(arrA.pop());
arrB.push(arrA.pop());
arrB.push(arrA.pop());
console.log(arrA, arrB);
