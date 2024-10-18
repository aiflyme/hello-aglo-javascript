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

//18 LCR 184. 设计自助结算系统
console.log('No.LCR 184. 设计自助结算系统');
var Checkout = function () {
    //a  stack b queue
    (this.a = []), (this.b = []);
};

/**
 * @return {number}
 */
Checkout.prototype.get_max = function () {
    return this.b.length === 0 ? -1 : this.b[0];
};

/**
 * @param {number} value
 * @return {void}
 */
Checkout.prototype.add = function (value) {
    this.a.push(value);

    while (this.b.length > 0 && this.b[this.b.length - 1] < value) {
        this.b.pop();
    }
    this.b.push(value);
};

/**
 * @return {number}
 */
Checkout.prototype.remove = function () {
    if (this.a.length === 0) return -1;
    if (this.b[0] === this.a[0]) {
        this.b.shift();
    }
    return this.a.shift();
};

var obj = new Checkout();

obj.add(15);
obj.add(9);
obj.add(16);
obj.add(10);
var param_1 = obj.get_max();
console.log(param_1, obj);
var param_3 = obj.remove();
console.log(param_3, obj);
var param_4 = obj.get_max();
console.log(param_4, obj);

/**
 * @param {number[]} heights
 * @param {number} limit
 * @return {number[]}
 */
//17 LCR 183. 望远镜中最高的海拔
console.log('No.17 LCR 183. 望远镜中最高的海拔');
var maxAltitude = function (heights, limit) {
    const n = heights.length,
        queue = [],
        res = [];

    for (let i = 0; i < limit; i++) {
        queue.push(heights[i]);
    }

    res.push(Math.max(...queue));
    console.log(res);
    for (let j = limit; j < n; j++) {
        queue.shift();
        queue.push(heights[j]);

        res.push(Math.max(...queue));
    }
    return res;
};
const heights = [14, 2, 27, -5, 28, 13, 39],
    limit = 3;
const maxAltitudeRS = maxAltitude(heights, limit);
console.log(maxAltitudeRS);
