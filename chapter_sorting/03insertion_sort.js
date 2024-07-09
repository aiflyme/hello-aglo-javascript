function insertionSort(nums) {
    //外循环：已排序区间为[0, i -1]
    for (let i = 1; i < nums.length; i++) {
        let base = nums[i];
        let j = i - 1;
        while (j >= 0 && nums[j] > base) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = base;
    }
}

/* Driver Code */
const nums = [4, 1, 3, 1, 5, 2];
insertionSort(nums);
console.log('插入排序完成后 nums =', nums);
