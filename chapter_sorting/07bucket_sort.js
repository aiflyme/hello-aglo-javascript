function bucketSort(nums) {
    //初始化 k = n/2 个桶，预期向每个桶分配2个元素
    const k = nums.length / 2;
    const buckets = [];

    //初始化二维数组
    for (let i = 0; i < k; i++) {
        buckets.push([]);
    }

    //分配数组元素到桶中
    for (const num of nums) {
        const i = Math.floor(num * k);
        buckets[i].push(num);
    }

    for (const bucket of buckets) {
        bucket.sort((a, b) => a - b);
    }

    //遍历合并结果
    let i = 0;
    for (const bucket of buckets) {
        for (num of bucket) {
            nums[i++] = num;
        }
    }
}

/* Driver Code */
const nums = [0.49, 0.96, 0.82, 0.09, 0.57, 0.43, 0.91, 0.75, 0.15, 0.37];
bucketSort(nums);
console.log('桶排序完成后 nums =', nums);
