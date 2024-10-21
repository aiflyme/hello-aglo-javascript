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
/**
 * @param {number[]} records
 * @return {number}
 */
var takeAttendance = function (records) {
    if (records.length === 0) return 0;
    let i = 0,
        j = records.length - 1,
        m = Math.floor((i + j) / 2);

    while (i <= j) {
        //数字大于下标,在右边
        if (records[m] <= m) {
            i = m + 1;
            //数字小于下标,在左边 if (records[m] < m)
        } else {
            j = m - 1;
        }
        m = Math.floor((i + j) / 2);
    }
    return i;
};

const records23 = [0, 1, 2, 3, 5];
const takeAttendanceRS = takeAttendance(records23);

console.log(takeAttendanceRS);
