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

//27 6. Z 字形变换
var convert = function (s, numRows) {
    if (numRows < 2) return s;
    let flag = -1,
        flags = 0,
        i = 0;
    const res = Array(numRows).fill('');
    for (let c of s) {
        res[i] += c;

        if (i === 0) flags = 1;
        else if (i === numRows - 1) flags = -1;
        i += flags;
        // if (i === 0 || i === numRows - 1) flag = -flag;
        // i += flag;
    }
    console.log(1122, res.join(''));
    return res.join('');
};

const res = [];
res[0] = '333';
res[1] = '444';
console.log(333, res);
const s27 = 'PAYPALISHIRING',
    numRows = 3;
convert(s27, numRows);

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
        l = 0,
        t = 0,
        r = matrix[0].length - 1,
        b = matrix.length - 1;
    while (true) {
        for (i = l; i <= r; i++) arr.push(matrix[t][i]); //left to right
        if (++t > b) break;
        for (i = t; i <= b; i++) arr.push(matrix[i][r]); // right to down
        if (l > --r) break;
        for (i = r; i >= l; i--) arr.push(matrix[b][i]); //right to left
        if (t > --b) break;
        for (i = b; i >= t; i--) arr.push(matrix[i][l]); //down to up
        if (++l > r) break;
    }
    console.log(arr);
    return arr;
};
spiralOrder(matrix);

var spiralOrders = function (matrix) {
    let i = 0,
        l = 0,
        t = 0,
        d = matrix.length - 1,
        r = matrix[0].length - 1;
    const arr = [];
    while (true) {
        for (i = l; i <= r; i++) arr.push(matrix[t][i]);
        if (++t > d) break;
        for (i = t; i <= d; i++) arr.push(matrix[i][r]);
        if (--r < l) break;
        for (i = r; i >= l; i--) arr.push(matrix[d][i]);
        if (t > --d) break;
        for (i = d; i >= t; i--) arr.push(matrix[i][l]);
        if (++l > r) break;
    }
    console.log(arr);
    return arr;
};
spiralOrders(matrix);

//29 59. 螺旋矩阵 II
var generateMatrix = function (n) {
    const matrix = Array.from({ length: n }, () => new Array(n));

    let num = 1,
        l = 0,
        t = 0,
        d = matrix.length - 1,
        r = matrix[0].length - 1;
    const arr = [];
    const tar = n * n;
    while (num <= tar) {
        for (i = l; i <= r; i++) matrix[t][i] = num++;
        if (++t > d) break;
        for (i = t; i <= d; i++) matrix[i][r] = num++;
        if (--r < l) break;
        for (i = r; i >= l; i--) matrix[d][i] = num++;
        if (t > --d) break;
        for (i = d; i >= t; i--) matrix[i][l] = num++;
        if (++l > r) break;
    }
    console.log(matrix);
    return matrix;
};
generateMatrix(3);

//30 48. 旋转图像
var rotate = function (matrix) {
    const n = matrix.length;

    //const arrs = [];
    const tmp = matrix.map((arr) => {
        return arr.slice();
    });
    console.log(tmp);
    // const tmp = Array.from({ length: n }, () => new Array(n));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[j][n - 1 - i] = tmp[i][j]; //turn right 90 dgress
            // smatrix[n - 1 - j][i] = tmp[i][j]; //turn left 90 dgress
        }
    }
    return matrix;
};

//method 2
var rotateSource = function (matrix) {
    const n = matrix.length;

    let tmp = 0;
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
            tmp = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = tmp;
        }
    }
    return matrix;
};

const matrix30 = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
];
const rotates = rotateSource(matrix30);
console.log('No.30', rotates);

//31 8. 字符串转换整数 (atoi)
var myAtoi = function (s) {
    let str = '',
        i = 1,
        sign = 1;
    const intMax32 = 2 ** 31 - 1,
        intMin32 = (-2) ** 31,
        bndry = Math.floor(2 ** 31 / 10);

    s = s.trim();
    if (s[0] === '-') sign = -1;
    else if (s[0] !== '+') i = 0;

    for (let j = i; j < s.length; j++) {
        if (parseInt(s[j]) >= 0 && parseInt(s[j]) <= 9) {
            console.log(j, s[j]);
            if (
                parseInt(str) > bndry ||
                (parseInt(str) === bndry && s[j] > 7)
            ) {
                return sign === -1 ? intMin32 : intMax32;
            }
            str += s[j];
        } else break;
    }
    return parseInt(sign * str);
};

let s31 = ' 1337c0d3';
s31 = '0-1';
s31 = 'words and 987';
s31 = ' -042';
s31 = ' -91283472332';
s31 = '21474836460';
s31 = '   +0 123';
const myAtois = myAtoi(s31);
console.log(myAtois);
