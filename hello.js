/* 线性阶 */
function linear(n) {
    // 长度为 n 的数组占用 O(n) 空间
    const nums = new Array(n);
    // 长度为 n 的列表占用 O(n) 空间
    const nodes = [];
    for (let i = 0; i < n; i++) {
        nodes.push(new ListNode(i));
    }
    console.log(nodes);
    // 长度为 n 的哈希表占用 O(n) 空间
    const map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(i, i.toString());
    }
    console.log(map);
}
linear(5);
