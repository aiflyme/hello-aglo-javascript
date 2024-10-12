//65 122. 买卖股票的最佳时机 II
var maxProfit = function (prices) {
    const n = prices.length - 1;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (prices[i] > prices[i - 1]) sum += prices[i] - prices[i - 1];
    }
    return sum;
};
const prices65 = [7, 6, 4, 3, 1]; //[1, 2, 3, 4, 5]; // [7, 1, 5, 3, 6, 4];
const maxProfitRS = maxProfit(prices65);
console.log(maxProfitRS);

//66 240. 搜索二维矩阵 II
var searchMatrix = function (matrix, target) {
    const m = matrix.length;

    const dfs = (nums, target) => {
        let m = nums.length - 1;
        let n = 0;

        while (n <= m) {
            const mid = Math.floor((m + n) / 2);
            if (target === nums[mid]) return mid;
            else if (target < nums[mid]) m = mid - 1;
            else n = mid + 1;
        }
        return -1;
    };
    for (let i = 0; i < m; i++) {
        const index = dfs(matrix[i], target);
        if (index >= 0) return true;
    }
    return false;
};
const matrix66 = [[-5]],
    target66 = -5;
const searchMatrixRS = searchMatrix(matrix66, target66);
console.log(searchMatrixRS);

//67 11. 盛最多水的容器
console.log('No.67 11. 盛最多水的容器');

var maxArea = function (height) {
    let n = 0,
        m = height.length - 1,
        res = 0;
    while (n < m) {
        res = Math.max(res, Math.min(height[n], height[m]) * (m - n));
        if (height[n] >= height[m]) m--;
        else if (height[n] < height[m]) n++;
    }

    return res;
};
const height67 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const maxAreaRS = maxArea(height67);
console.log(maxAreaRS);

//68 179. 最大数
console.log('No.68 179. 最大数');
var largestNumber = function (nums) {
    const compTwoNum = function (a, b) {
        const stra = b + a,
            strb = a + b;
        if (stra < strb) return -1;
        else if (stra > strb) return 1;
        else return 0;
    };
    nums.sort((a, b) => compTwoNum(a.toString(), b.toString())); //compTwoNum(a.toString(), b.toString());

    if (nums[0] === 0) return '0';
    return nums.join('');
    //     const arrs = Array.from({ length: 10 }, () => new Array());
    //     nums.forEach((ele) => {
    //         const stratNum = Number(ele.toString().substring(0, 1));
    //         arrs[stratNum].push(ele);
    //     });
    //     console.log(arrs);
    // };
    // const nums68 = [3, 30, 34, 5, 9];
    // const largestNumberRS = largestNumber(nums68);
    // console.log(largestNumberRS);
    // nums68.forEach((ele) => {
    //     const stratNum = Number(ele.toString().substring(0, 1));
};
const nums68 = [3, 30, 34, 5, 9]; //
const largestNumberRS = largestNumber(nums68);
console.log(largestNumberRS);
