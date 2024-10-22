//19 LCR 146. 螺旋遍历二维数组
console.log('No.19 LCR 146. 螺旋遍历二维数组');
/**
 * @param {number[][]} array
 * @return {number[]}
 */
var spiralArray = function (array) {
    if (array.length === 0) return [];
    const res = [];
    let top = 0,
        left = 0,
        down = array.length - 1,
        right = array[0].length - 1;
    while (true) {
        //left to right
        for (let i = left; i <= right; i++) res.push(array[top][i]);
        if (++top > down) break;

        //top to down
        for (i = top; i <= down; i++) res.push(array[i][right]);
        if (left > --right) break;

        //down to left
        for (i = right; i >= left; i--) res.push(array[down][i]);
        if (top > --down) break;

        //down to top
        for (i = down; i >= top; i--) res.push(array[i][left]);
        if (++left > right) break;
    }
    return res;
};
const array19 = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
];

const spiralArrayRS = spiralArray(array19);
console.log(spiralArrayRS);

/**
 * @param {number[][]} array
 * @return {number[]}
 */
var spiralArray = function (array) {};

//20 LCR 148. 验证图书取出顺序
console.log('No.20 LCR 148. 验证图书取出顺序');
/**
 * @param {number[]} putIn
 * @param {number[]} takeOut
 * @return {boolean}
 */
var validateBookSequences = function (putIn, takeOut) {
    if (putIn.length === 0 && takeOut.length === 0) return true;
    else if (putIn.length === 0 || takeOut.length === 0) return false;
    const res = [];
    let i = 0;
    putIn.forEach((ele) => {
        res.push(ele);
        // console.log(res);
        while (res.length > 0 && takeOut[i] === res[res.length - 1]) {
            res.pop();
            i++;
        }
    });
    return res.length === 0 ? true : false;
};
const putIn20 = [6, 7, 8, 9, 10, 11],
    takeOut20 = [9, 11, 10, 8, 7, 6];
const validateBookSequencesRS = validateBookSequences(putIn20, takeOut20);
console.log(validateBookSequencesRS);
