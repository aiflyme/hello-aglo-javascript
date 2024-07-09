function selectionSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let k = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[k] > nums[j]) k = j;
        }
        [nums[i], nums[k]] = [nums[k], nums[i]];
    }
}

/* Driver Code */
const nums = [4, 1, 3, 1, 5, 2];
selectionSort(nums);
console.log('选择排序完成后 nums =', nums);
