class QuickSort {
    swap(nums, i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    /* 哨兵划分 */
    partition(nums, left, right) {
        let i = left,
            j = right;
        while (i < j) {
            while (i < j && nums[j] >= nums[left]) j--;
            while (i < j && nums[i] <= nums[left]) i++;
            this.swap(nums, i, j);
        }
        this.swap(nums, i, left);
        return i;
    }

    quickSort(nums, left, right) {
        if (left >= right) return;

        const pivot = this.partition(nums, left, right);
        this.quickSort(nums, left, pivot - 1);
        this.quickSort(nums, pivot + 1, right);
    }
}

class QuickSortMedian {
    swap(nums, i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    medianThree(nums, left, right) {
        const mid = Math.floor((left + right) / 2);
        let l = nums[left],
            m = nums[mid],
            r = nums[right];
        //取中值
        if ((l <= m && m <= r) || (r <= m && m <= l)) return mid;
        if ((m <= l && l <= r) || (r <= l && l <= m)) return left;
        else return right;
    }

    /* 哨兵划分 */
    partition(nums, left, right) {
        let i = left,
            j = right,
            mid = this.medianThree(nums, left, right);
        while (i < j) {
            while (i < j && nums[j] >= nums[mid]) j--;
            while (i < j && nums[i] <= nums[mid]) i++;
            this.swap(nums, i, j);
        }
        this.swap(nums, i, mid);
        return i;
    }

    quickSort(nums, left, right) {
        if (left >= right) return;
        const pivot = this.partition(nums, left, right);
        this.quickSort(nums, left, pivot - 1);
        this.quickSort(nums, pivot + 1, right);
    }
}

class QuickSortTailCall {
    swap(nums, i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    medianThree(nums, left, right) {
        const mid = Math.floor((left + right) / 2);
        let l = nums[left],
            m = nums[mid],
            r = nums[right];
        //取中值
        if ((l <= m && m <= r) || (r <= m && m <= l)) return mid;
        if ((m <= l && l <= r) || (r <= l && l <= m)) return left;
        else return right;
    }

    /* 哨兵划分 */
    partition(nums, left, right) {
        let i = left,
            j = right,
            mid = this.medianThree(nums, left, right);
        while (i < j) {
            while (i < j && nums[j] >= nums[mid]) j--;
            while (i < j && nums[i] <= nums[mid]) i++;
            this.swap(nums, i, j);
        }
        this.swap(nums, i, mid);
        return i;
    }

    quickSort(nums, left, right) {
        while (left < right) {
            const pivot = this.partition(nums, left, right);
            if (pivot - left < pivot - right) {
                this.quickSort(nums, left, pivot - 1);
                left = pivot + 1;
            } else {
                this.quickSort(nums, pivot + 1, right);
                right = pivot - 1;
            }
        }
    }
}

// const nums = [2, 4, 1, 0, 3, 5];
const nums = [2, 4, 1, 0, 3, 5, 11, 13, 10, 9, 6, 7];
const quickSort = new QuickSort();
quickSort.quickSort(nums, 0, nums.length - 1);
console.log('快速排序完成后 nums =', nums);

/* 快速排序（中位基准数优化） */
const nums1 = [2, 4, 1, 0, 3, 5];
const quickSortMedian = new QuickSortMedian();
quickSortMedian.quickSort(nums1, 0, nums1.length - 1);
console.log('快速排序（中位基准数优化）完成后 nums =', nums1);

/* 快速排序（尾递归优化） */
const nums2 = [2, 4, 1, 0, 3, 5];
const quickSortTailCall = new QuickSortTailCall();
quickSortTailCall.quickSort(nums2, 0, nums2.length - 1);
console.log('快速排序（尾递归优化）完成后 nums =', nums2);
