const nums = [1, 3, 2, 5, 4];
console.log(`列表 nums = ${nums}`);

//access elecents
const num = nums[1];

//update element
nums[1] = 0;

console.log(nums);

//insert and delete
nums.push(6);
console.log(nums);
nums.pop();
console.log(nums);

nums.unshift(-1);
console.log(nums);
nums.shift();
console.log(nums);

//loop
let count = 0;
for (let i = 0; i < nums.length; i++) {
    count += nums[i];
}
console.log(count);

count = 0;
for (const num of nums) {
    count += num;
}
console.log(count);

//concat list
const nums1 = [6, 8, 7, 10, 9];
nums.push(...nums1);
console.log(nums, nums1);

//order
nums.sort((a, b) => a - b);
console.log(nums);

nums.splice(3, 0, 10, 11);
console.log(nums);

//list
class myList {
    #arr = new Array();
    #capacity = 0;
    #size = 0;
    #extendRatio = 2;

    constructor(capacity) {
        this.#arr = new Array(capacity);
        this.#capacity = capacity;
    }

    size() {
        return this.#size;
    }

    capacity() {
        return this.#capacity;
    }

    list() {
        return this.#arr.join(',');
    }

    get(index) {
        if (index < 0 || index >= this.#size) throw new Error('index overflow');
        return this.#arr[index];
    }

    //update element
    set(index, num) {
        if (index < 0 || index >= this.#size) throw new Error('index overflow');
        this.#arr[index] = num;
    }

    //add element
    add(num) {
        if (this.#size === this.#capacity) {
            this.extendCapacity();
        }

        this.#arr[this.#size] = num;
        this.#size++;
    }

    //add element in the middle
    insert(index, num) {
        if (index < 0 || index >= this.#size) throw new Error('index overflow');

        if (this.#size === this.#capacity) {
            this.extendCapacity();
        }

        for (let i = this.#size - 1; i >= index; i--) {
            this.#arr[i + 1] = this.#arr[i];
        }
        this.#arr[index] = num;
        this.#size++;
    }

    remove(index) {
        if (index < 0 || index >= this.#size) throw new Error('index overflow');

        const num = this.#arr[index];

        for (let i = index; i < this.#size - 1; i++) {
            this.#arr[i] = this.#arr[i + 1];
        }
        this.#size--;

        return num;
    }

    extendCapacity() {
        // 新建一个长度为原数组 extendRatio 倍的新数组，并将原数组复制到新数组
        //create a new array that is extendRatio times of original array, and copy original array to new array
        const newArr = new Array(this.#capacity * this.#extendRatio);
        for (let i = 0; i < this.#size; i++) {
            newArr[i] = this.#arr[i];
        }
        this.#arr = newArr;
        this.#capacity = this.#capacity * this.#extendRatio;
    }

    toArray() {
        let size = this.size();
        const arr = new Array(size);

        for (let i = 0; i < size; i++) {
            arr[i] = this.get(i);
        }
        return arr;
    }
}

const myArr = new myList(5);
myArr.add(1);
myArr.add(3);
myArr.add(2);
myArr.add(5);
myArr.add(4);
myArr.add(6);
myArr.remove(5);

myArr.set(4, 8);

console.log(myArr.list());
console.log(myArr.size());
console.log(myArr.get(4));
