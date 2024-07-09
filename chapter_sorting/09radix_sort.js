//获取元素num的第K位  exp=10^(k-1)
function digit(num, exp) {
    return Math.floor(num / exp) % 10;
}

function countingSortDigit(nums, exp) {
    //十进制的位范围为0-9，因此需要长度为10的桶数量
    const counter = new Array(10).fill(0);
    const n = nums.length;

    //统计0-9各数字的出现次数
    for (let i = 0; i < n; i++) {
        const d = digit(nums[i], exp); //获取nums[i]第k位，记为d
        counter[d]++; //统计数字d的出现次数
    }

    //求前缀和，将出现个数转换为数组索引
    for (let i = 0; i < 9; i++) {
        counter[i + 1] += counter[i];
    }

    //倒序遍历，根据桶内统计结果，将各元素填入res
    const res = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        const d = digit(nums[i], exp);
        const j = counter[d] - 1;
        res[j] = nums[i];
        counter[d]--;
    }

    //res覆盖原数组nums
    for (let i = 0; i < n; i++) {
        nums[i] = res[i];
    }
}

//基数排序
function radixSort(nums) {
    //获取数组的最大元素，用于判断最大位数
    let m = Number.MIN_VALUE;
    for (const num of nums) {
        if (num > m) m = num;
    }

    for (let exp = 1; exp <= m; exp *= 10) {
        countingSortDigit(nums, exp);
    }
}

const nums = [
    10546151, 35663510, 42865989, 34862445, 81883077, 88906420, 72429244,
    30524779, 82060337, 63832996,
];
radixSort(nums);
console.log('基数排序完成后 nums =', nums);
