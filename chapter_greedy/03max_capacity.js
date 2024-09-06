// const arr = [1, 2, 3];
// console.log(Math.max(...arr));
/* 最大容量：贪心 */
function maxCapacity(ht) {
    // 初始化 i, j，使其分列数组两端
    let i = 0,
        j = ht.length - 1;
    let res = 0;

    while (i < j) {
        const cap = Math.min(ht[i], ht[j]) * (j - i);
        res = Math.max(res, cap);
        if (ht[i] < ht[j]) i++;
        else j--;
    }
    return res;
}

/* Driver Code */
const ht = [3, 8, 5, 2, 7, 7, 3, 4];

// 贪心算法
const res = maxCapacity(ht);
console.log(`最大容量为 ${res}`);
