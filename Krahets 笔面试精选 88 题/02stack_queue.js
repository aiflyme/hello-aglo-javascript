//06 Valid Parentheses
// JavaScript 没有内置的栈类，可以把 Array 当作栈来使用
const stack = [];

/* 元素入栈 */
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(9);

//peek
//console.log(stack[stack.length - 1]);

const s = '(]';

// function isValid(s) {
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
//             arr.push(s[i]);
//         } else {
//             if (s[i] === ')' && arr[arr.length - 1] === '(') {
//                 arr.pop();
//             } else if (s[i] === '}' && arr[arr.length - 1] === '{') {
//                 arr.pop();
//             } else if (s[i] === ']' && arr[arr.length - 1] === '[') {
//                 arr.pop();
//             } else {
//                 return false;
//             }
//         }
//     }
//     return arr.length === 0 ? true : false;
// }

function isValid(s) {
    const arr = [];
    const pMap = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
    ]);
    for (let i = 0; i < s.length; i++) {
        if (pMap.has(s[i])) {
            arr.push(s[i]);
        } else {
            if (pMap.get(arr.pop()) !== s[i]) return false;
        }
    }
    //console.log(arr.length);
    return arr.length === 0 ? true : false;
}

console.log(isValid(s));

//08 用栈实现队列 232

peek = function () {
    stackIn = [1, 2];
    stackOut = [];
    console.log(stackIn, stackOut.length);
    if (stackOut) return 11; //stackIn[0];
    else return 22; //stackOut[0];
};

pop = function () {
    stackIn = [1, 2];
    stackOut = [];
    if (stackOut.length === 0) {
        while (stackIn.length !== 0) {
            const popNum = stackIn.pop();
            stackOut.push(popNum);
            //stackIn.pop();
        }
    }

    const rs = this.stackOut.pop();
    return rs;
};

console.log(33, pop());

//09 394. 字符串解码
// const aa = 'a';
// console.log(aa.repeat(3));

const s09 = '100[leetcode]';
var decodeString = function (s) {
    const stack09 = [];
    let res = '';
    multi = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            stack09.push([multi, res]);
            res = '';
            multi = 0;
        } else if (s[i] === ']') {
            const [cur_multi, last_res] = stack09.pop();
            res = last_res + res.repeat(cur_multi);
        } else if (s[i] >= 0 && s[i] <= 9) {
            multi = multi * 10 + parseInt(s[i]);
        } else {
            res += s[i];
        }
    }
    return res;
};

const s09rs = decodeString(s09);
console.log(s09rs);

// var decodeStringRecur = function (s, i) {
//     let res = '',
//         multi = 0;

//     while (i < s.length) {
//         if (s[i] === '[') {
//             const [i, tmp] = decodeStringRecur(s, i + 1);
//             res += tmp * multi;
//             multi = 0;
//         } else if (s[i] === ']') {
//             return [i, res];
//         } else if (s[i] >= 0 && s[i] <= 9) {
//             multi = multi + s[i];
//         } else {
//             res += s[i];
//         }
//         i++;
//     }
//     return res;
// };
// s09rs = decodeStringRecur(s09, 0);
// console.log(s09rs);
