// Random access elements
function randomAccess(nums) {
    const random_index = Math.floor(Math.random() * nums.length);
    return nums[random_index];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(randomAccess(arr));

//insert elements
function insert(nums, num, index) {
    for (const i = nums.length - 1; i < index; i--) {
        nums[i] = nums[i - 1];
    }
    nums[index] = num;
    return nums;
}

const random_index = Math.floor(Math.random() * arr.length);
const arrInsert = insert(arr, 10, random_index);

console.log(arrInsert);

//delete elements
function del(nums, index) {
    for (let i = index; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1];
    }

    return nums.slice(0, -1);
}

const arrDelete = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrDel = del(arrDelete, 3);
console.log('del array:');
console.log(arrDel);

//listed array
function traverse(nums) {
    let count = 0;
    let count2 = 0;
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
    }

    for (const num of nums) {
        count2 += num;
    }
    const arr = [];
    arr.push(count);
    arr.push(count2);
    return arr;
}

console.log('Listed array:');
const arrTraverse = traverse(arr);
console.log(arrTraverse);

//find elements
function find(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
    return -1;
}
console.log('find elements:');
const target = Math.floor(Math.random() * 10);
const findElement = find(arr, target);
console.log(target, findElement);

//extend array length
function extend(nums, enlarge) {
    const res = new Array(nums.length + enlarge).fill(0);

    //fill the original element to new array
    for (let i = 0; i < nums.length; i++) {
        res[i] = nums[i];
    }
    return res;
}
