//21 LCR 120. 寻找文件副本

/**
 * @param {number[]} documents
 * @return {number}
 */
var findRepeatDocument = function (documents) {
    //method 1
    // const n = documents.length,
    //     map = new Map();
    // for (let i = 0; i < n; i++) {
    //     if (map.get(documents[i]) || map.get(documents[i]) === 0)
    //         return documents[i];
    //     else map.set(documents[i], documents[i]);
    // }
    // return -1;

    //method 2
    const n = documents.length;
    let i = 0;
    while (i < n) {
        if (documents[i] === i) {
            i++;
            continue;
        }

        if (documents[i] === documents[documents[i]]) return documents[i];
        [documents[documents[i]], documents[i]] = [
            documents[i],
            documents[documents[i]],
        ];
    }
    return -1;
};

const documents20 = [3, 4, 2, 0, 0, 1];
const findRepeatDocumentRS = findRepeatDocument(documents20);
console.log(findRepeatDocumentRS);

//22 LCR 172. 统计目标成绩的出现次数
console.log('No.22 LCR 172. 统计目标成绩的出现次数');
/**
 * @param {number[]} scores
 * @param {number} target
 * @return {number}
 */
var countTarget = function (scores, target) {
    if (scores.length === 0) return 0;
    //mothod 1
    //const n = scores.length;
    // let j = 0;
    // for (let i = 0; i < n; i++) {
    //     if (scores[i] === target) j++;
    //     if (scores[i] > target) break;
    // }
    // return j;
    //method 2

    let low = 0,
        high = scores.length - 1;

    while (low <= high) {
        const m = Math.floor((low + high) / 2);
        if (scores[m] > target) high = m - 1;
        else if (scores[m] < target) low = m + 1;
        else {
            if (scores[low] === scores[high]) {
                return high - low + 1;
            }
            if (scores[low] < target) {
                low++;
            }
            if (scores[high] > target) {
                high--;
            }
        }
    }
    return 0;
};
const scores21 = [1, 4],
    target21 = 4;
const countTargetRS = countTarget(scores21, target21);
console.log(countTargetRS);

//23 LCR 173. 点名
console.log('No.23 LCR 173. 点名');
/**
 * @param {number[]} records
 * @return {number}
 */
var takeAttendance = function (records) {
    //method 1
    // if (records.length === 0) return 0;
    // let i = 0,
    //     j = records.length - 1,
    //     m = Math.floor((i + j) / 2);
    // while (i <= j) {
    //     //数字大于下标,在右边
    //     if (records[m] <= m) {
    //         i = m + 1;
    //         //数字小于下标,在左边 if (records[m] < m)
    //     } else {
    //         j = m - 1;
    //     }
    //     m = Math.floor((i + j) / 2);
    // }
    // return i;

    //method 2
    let i = 0,
        j = records.length - 1;
    const cur = function (records, left, right) {
        if (left > right) return left;
        const m = Math.floor((left + right) / 2);
        if (records[m] === m) left = m + 1;
        else right = m - 1;
        return cur(records.slice(left, right + 1), left, right);
    };
    return cur(records, i, j);
};

const records23 = [0]; //[0, 1, 2, 3, 5];
const takeAttendanceRS = takeAttendance(records23);

console.log(takeAttendanceRS);

//24 LCR 121. 寻找目标值 - 二维数组
console.log('No.24 LCR 121. 寻找目标值 - 二维数组');
/**
 * @param {number[][]} plants
 * @param {number} target
 * @return {boolean}
 */
var findTargetIn2DPlants = function (plants, target) {
    if (plants.length === 0) return false;
    let i = plants.length - 1,
        j = 0;

    while (i >= 0 && j < plants[0].length) {
        if (plants[i][j] < target) j++;
        else if (plants[i][j] > target) i--;
        else return true;
    }
    return false;
};
const plants24 = [
        [2, 3, 6, 8],
        [4, 5, 8, 9],
        [5, 9, 10, 12],
    ],
    target24 = 8;
const findTargetIn2DPlantsRS = findTargetIn2DPlants(plants24, target24);
console.log(findTargetIn2DPlantsRS);

//25 LCR 128. 库存管理 I
console.log('No.25 LCR 128. 库存管理 I');
/**
 * @param {number[]} stock
 * @return {number}
 */
var inventoryManagement = function (stock, left, right) {
    if (stock.length === 0) return -1;

    if (left >= right) return;
    const partition = function (stock, left, right) {
        let i = left,
            j = right;

        while (i < j) {
            while (i < j && stock[j] >= stock[left]) j--;
            while (i < j && stock[i] <= stock[left]) i++;
            [stock[i], stock[j]] = [stock[j], stock[i]];
        }
        [stock[left], stock[i]] = [stock[i], stock[left]];
        return i;
    };
    const pivot = partition(stock, left, right);
    inventoryManagement(stock, left, pivot - 1);
    inventoryManagement(stock, pivot + 1, right);
    return stock[0];

    //method 2  O(n)
    // let min = stock[0];
    // for (let i = 1; i < stock.length; i++) {
    //     if (stock[i] < min) min = stock[i];
    // }
    // return min;
};

const stock24 = [2, 4, 1, 0, 3, 5]; //[3, 0, 0, 1, 2, 2];
const inventoryManagementRS = inventoryManagement(
    stock24,
    0,
    stock24.length - 1
);
console.log(inventoryManagementRS);

//26 LCR 169. 招式拆解 II
/**
 * @param {string} arr
 * @return {character}
 */
console.log('No.26 LCR 169. 招式拆解 II');
var dismantlingAction = function (arr) {
    if (arr.length === 0) return ' ';
    const arrMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        arrMap.set(arr[i], !arrMap.has(arr[i]));
        // arrMap.get(arr[i])
        //     ? arrMap.set(arr[i], arrMap.get(arr[i]) + 1)
        //     : arrMap.set(arr[i], 1);
    }
    // console.log(arrMap);

    for (let [key, val] of arrMap.entries()) {
        if (val) return key;
    }
    return ' ';
};

const arr26 = 'abbccdeff';
const dismantlingActionRS = dismantlingAction(arr26);
console.log(dismantlingActionRS);
