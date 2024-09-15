//16 392. 判断子序列  含DP方案
var isSubsequence = function (s, t) {
    // let res = '',
    //     j = 0,
    //     k = 0;
    // for (let i = 0; i < s.length; i++) {
    //     while (j < t.length) {
    //         if (s[i] === t[j]) {
    //             res += s[i];
    //             //j = k;
    //             j++;
    //             break;
    //         }
    //         j++;
    //     }
    // }
    // return s === res ? true : false;

    let i = 0,
        j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
};

const s = 'abc',
    t = 'ahbgdc';
const isSubsequences = isSubsequence(s, t);
console.log(isSubsequences);

//17 876. 链表的中间结点
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    //单指针法
    // let i = 0;
    // let p = head;
    // while (p) {
    //     i++;
    //     p = p.next;
    // }
    // let j = i % 2 === 1 ? Math.floor(i / 2) : i / 2;
    // (p = head), (i = 0);
    // while (p) {
    //     if (i === j) return p;
    //     i++;
    //     p = p.next;
    // }

    //快慢指针法
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

// 初始化各个节点
const n0 = new ListNode(1);
const n1 = new ListNode(3);
const n2 = new ListNode(2);
const n3 = new ListNode(5);
const n4 = new ListNode(4);
// 构建节点之间的引用
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;

const middleNodes = middleNode(n0);
console.log(middleNodes);

//18 160. 相交链表
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let i = 0,
        j = 0;
    let p = headA,
        q = headB;
    while (p !== null) {
        i++;
        p = p.next;
    }
    while (q !== null) {
        j++;
        q = q.next;
    }
    let k = i > j ? i - j : j - i;
    if (i > j) {
        while (k > 0) {
            headA = headA.next;
            k--;
        }
    } else {
        while (k > 0) {
            headB = headB.next;
            k--;
        }
    }

    while (headA && headB) {
        if (headA === headB) return headA;
        else {
            headA = headA.next;
            headB = headB.next;
        }
    }
};

//19 167. 两数之和 II - 输入有序数组
var twoSum = function (numbers, target) {
    for (let i = 0; i <= numbers.length - 2; i++) {
        for (let j = i + 1; j <= numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

var twoSumDoublePoint = function (numbers, target) {
    let i = 0,
        j = numbers.length - 1;

    while (i < j) {
        console.log(i, j, numbers[i] + numbers[j]);
        if (numbers[i] + numbers[j] < target) i++;
        else if (numbers[i] + numbers[j] > target) j--;
        else return [i, j];
    }
    return [];
};

const numbers19 = [2, 7, 11, 15];
const target19 = 9;
const twoSums = twoSum(numbers19, target19);
const twoSumDoublePoints = twoSumDoublePoint(numbers19, target19);

console.log(twoSums, twoSumDoublePoints);

//20 142. 环形链表 II
//method 1
// const arr20 = [];
// while (head) {
//     arr20.push(head);
//     if (arr20.includes(head.next)) return head.next;
//     head = head.next;
// }
//return null;

const arr = [1, 2, 3, 45];
console.log(arr.includes(46), arr.indexOf(45) + 1);

//21 151. 反转字符串中的单词
s21_01 = '  hello world  ';
//s21_01 = 'the sky is blue';

s21_01 = 'a good   example';
s21_01 = '  Bob    Loves  Alice   ';
s21_01 = 'the sky is blue';
//method 1

// const arr21 = s21_01.split(' ');
// const arr21_02 = s21_02.trim().split(' ');

// let str = '';
// for (let i = arr21.length - 1; i >= 0; i--) {
//     if (arr21[i] !== '') str += arr21[i] + ' ';
// }

// console.log(str.substring(0, str.length - 1));
// console.log(arr21, arr21_02);

//method 2

const arr21 = [];
let str = '';
for (let i = s21_01.length - 1; i >= 0; i--) {
    if (s21_01[i] !== ' ') {
        arr21.unshift(s21_01[i]);
    } else if (s21_01[i] === ' ' && arr21.length > 0) {
        str += arr21.join('') + ' ';
        arr21.length = 0;
    }
}
if (arr21.length > 0) {
    str += arr21.join('');
}
console.log(str);
//method 3

// let i = s21_01.length - 1,
//     j = i;
// const res = [];

// s21_01 = s21_01.trim();
// while (i >= 0) {
//     while (i >= 0 && s21_01[i] !== ' ') i--;
//     res.push(s21_01.substring(i + 1, j + 1));
//     while (i >= 0 && s21_01[i] === ' ') i--;
//     j = i;
// }

// console.log(res);

//22 3. 无重复字符的最长子串
const s22 = 'asjrgapa';

var lengthOfLongestSubstring = function (s) {
    let maxLen = 0,
        i = -1,
        j = 0;

    const maps = new Map();
    for (let j = 0; j < s.length; j++) {
        if (maps.has(s[j])) i = Math.max(i, maps.get(s[j]));
        maps.set(s[j], j);
        maxLen = Math.max(maxLen, j - i);
    }
    console.log(maps);
    return maxLen;
};
console.log(lengthOfLongestSubstring(s22));

//23 15. 三数之和
let nums23 = [-1, 0, 1, 2, -1, -4];

// nums23 = [-1, 0, 1];
//method 1
// var threeSum = function (nums) {
//     const len = nums.length;
//     const set = new Set(),
//         tmpArr = [];
//     let str = '';
//     for (let i = 0; i < len - 2; i++) {
//         for (let j = i + 1; j < len - 1; j++) {
//             for (let k = j + 1; k < len; k++) {
//                 if (nums[i] + nums[j] + nums[k] === 0) {
//                     const rs = [nums[i], nums[j], nums[k]].sort(
//                         (a, b) => a - b
//                     );
//                     str = rs.join('') + ' ';
//                     if (!tmpArr.includes(str)) {
//                         tmpArr.push(str);
//                         console.log(rs, str);

//                         set.add([nums[i], nums[j], nums[k]]);
//                     }
//                 }
//             }
//         }
//     }
//     return set;
// };
// const threeSums = threeSum(nums23);
// console.log(threeSums);

//method 2
var threeSumDoublePoint = function (nums) {
    const len = nums.length;
    const arr = [];
    let i = 0,
        j = 0;
    nums.sort((a, b) => a - b);
    for (let k = 0; k < len - 2; k++) {
        if (nums[k] > 0) break;
        if (k > 0 && nums[k] === nums[k - 1]) continue;

        (i = k + 1), (j = len - 1);
        while (i < j) {
            const sum = nums[k] + nums[i] + nums[j];

            if (sum < 0) {
                while (i < j && nums[i] === nums[++i]);
            } else if (sum > 0) {
                while (i < j && nums[j] === nums[--j]);
            } else {
                arr.push([nums[k], nums[i], nums[j]]);
                while (i < j && nums[i] === nums[++i]);
                while (i < j && nums[j] === nums[--j]);
            }
        }
    }
    return arr;
};
const threeSumDoublePoints = threeSumDoublePoint(nums23);
console.log(threeSumDoublePoints);
