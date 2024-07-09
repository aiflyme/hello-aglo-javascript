function countingSortNaive(nums) {
    //找出最大数
    let m = 0;
    for (const num of nums) {
        if (num > m) m = num;
    }

    //创建数组
    const counter = new Array(m + 1).fill(0);

    //填充数组
    for (const num of nums) {
        counter[num]++;
    }

    //遍历counter,填入原数组
    let i = 0;
    for (let num = 0; num < m + 1; num++) {
        for (let j = 0; j < counter[num]; j++) {
            nums[i++] = num;
        }
    }
}

function countingSort(nums) {
    //找出最大数
    let m = 0;
    for (const num of nums) {
        if (num > m) m = num;
    }

    //创建数组
    const counter = new Array(m + 1).fill(0);

    //填充数组
    for (const num of nums) {
        counter[num]++;
    }

    //求counter前缀和，将出现次数转为尾索引
    for (let i = 0; i < m; i++) {
        counter[i + 1] += counter[i];
    }

    //4倒序遍历nums，将各元素填入结果数组res
    const n = nums.length - 1;
    const res = new Array(n + 1);
    for (i = n; i >= 0; i--) {
        const num = nums[i];
        res[counter[num] - 1] = num;
        counter[num]--;
    }
    for (i = 0; i <= n; i++) {
        nums[i] = res[i];
    }
}

/* Driver Code */
const nums = [1, 0, 1, 2, 0, 4, 0, 2, 2, 4];
countingSortNaive(nums);
console.log('计数排序（无法排序对象）完成后 nums =', nums);

const nums1 = [1, 0, 1, 2, 0, 4, 0, 2, 2, 4];
countingSort(nums1);
console.log('计数排序完成后 nums1 =', nums1);
