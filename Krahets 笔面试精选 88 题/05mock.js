//25 415. 字符串相加
var addStrings = function (num1, num2) {
    //return num1 + num2;
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0,
        tmp = 0,
        str = '';
    while (i >= 0 || j >= 0) {
        const n1 = i >= 0 ? parseInt(num1[i]) : 0;
        const n2 = j >= 0 ? parseInt(num2[j]) : 0;
        tmp = n1 + n2 + carry;
        carry = Math.floor(tmp / 10);
        str = (tmp % 10) + str;
        i--;
        j--;
    }
    if (carry === 1) str = 1 + str;
    return str;
};
const num1 = '11',
    num2 = '9';
console.log(addStrings(num1, num2));

//26 796. 旋转字符串
let s = 'abcde',
    goal = 'cdeba';

console.log(s.slice(1, s.length) + s.slice(0, 1));
var rotateString = function (s, goal) {
    if (s.length !== goal.length) return null;
    let flag = true;
    for (let i = 0; i < goal.length; i++) {
        flag = true;
        for (let j = 0; j < goal.length; j++) {
            if (s[(i + j) % goal.length] !== goal[j]) {
                flag = false;
                break;
            }
        }
        if (flag) return true;
    }
    return false;
};
const rotateStrings = rotateString(s, goal);
console.log(rotateStrings);

//method 2
var rotateStringSearch = function (s, goal) {
    return s.length === goal.length && (s + s).indexOf(goal) !== -1;
};

const rotateStringSearhs = rotateStringSearch(s, goal);
console.log(rotateStringSearhs);

26; //946. 验证栈序列
const pushed = [1, 2, 3, 4, 5],
    popped = [4, 5, 3, 2, 1];
var validateStackSequences = function (pushed, popped) {
    const arr = [];
    let i = 0;
    pushed.forEach((element) => {
        arr.push(element);
        while (arr.length > 0 && arr[arr.length - 1] === popped[i]) {
            arr.pop();
            i++;
        }
    });
    return arr.length === 0 ? true : false;
};
const validateStackSequencess = validateStackSequences(pushed, popped);
console.log(validateStackSequencess);

//27

//28 54. 螺旋矩阵
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
console.log(matrix.length, matrix[0].length);
console.log(matrix[0][3], matrix[1][3]);
//   right j+1 down i+1 left j-1 up i-1
var spiralOrder = function (matrix) {
    if (matrix.length === 0) return [];
    const arr = [];
    let i = 0,
        l,
        t = 0,
        r = matrix[0].length - 1,
        b = matrix.length - 1,
        x = 0;
    while (true) {
        for (i = l; i <= r; i++) arr.push = matrix[t][i]; //left to right
        if (++t > b) break;
    }
};
spiralOrder(matrix);
