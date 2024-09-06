/* 最大切分乘积：贪心 */
function maxProductCutting(n) {
    //小余3时
    if (n <= 3) return 1 * (n - 1);

    let a = Math.floor(n / 3);
    let b = n % 3;

    if (b === 1) {
        return Math.pow(3, a - 1) * 2 * 2;
    }
    if (b === 2) {
        return Math.pow(3, a) * 2;
    }
    return Math.pow(3, a);
}

/* Driver Code */
let n = 58;

// 贪心算法
let res = maxProductCutting(n);
console.log(`最大切分乘积为 ${res}`);
