/* 堆的长度为 n ，从节点 i 开始，从顶至底堆化 */
function siftDown(nums, n, i) {
    while (true) {
        // 判断节点 i, l, r 中值最大的节点，记为 ma
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        let ma = i;
        if (l < n && nums[l] > nums[ma]) {
            ma = l;
        }
        if (r < n && nums[r] > nums[ma]) {
            ma = r;
        }
        // 若节点 i 最大或索引 l, r 越界，则无须继续堆化，跳出
        if (ma === i) {
            break;
        }
        // 交换两节点
        [nums[i], nums[ma]] = [nums[ma], nums[i]];
        // 循环向下堆化
        i = ma;
    }
}
