function merge(nums, left, mid, right) {
    //左数组[left,mid] 右数组[mid+1,right]
    const tmp = new Array(right - left + 1);

    //初始化左子数组和右子数组的起始索引
    let i = left,
        j = mid + 1,
        k = 0;

    //左右数组开始对比
    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) {
            tmp[k++] = nums[i++];
        } else {
            tmp[k++] = nums[j++];
        }
    }

    //最后剩余的大的数,只可能左或右一边存在
    while (i <= mid) {
        tmp[k++] = nums[i++];
    }
    while (j <= right) {
        tmp[k++] = nums[j++];
    }

    //将临时数组tmp中的元素复制回原数组
    for (k = 0; k < tmp.length; k++) {
        nums[left + k] = tmp[k];
    }
}

function mergeSort(nums, left, right) {
    if (left >= right) return;
    let mid = Math.floor((left + right) / 2);
    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);

    merge(nums, left, mid, right);
}

const nums = [7, 3, 2, 6, 0, 1, 5, 4];
mergeSort(nums, 0, nums.length - 1);
console.log('归并排序完成后 nums =', nums);
