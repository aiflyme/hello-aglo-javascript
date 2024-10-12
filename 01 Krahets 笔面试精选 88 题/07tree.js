/**
 * Definition for a binary tree node.*/
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

//36 102. 二叉树的层序遍历

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const t0 = new TreeNode(3);
const t1 = new TreeNode(9);
const t2 = new TreeNode(20);
const t3 = new TreeNode(15);
const t4 = new TreeNode(7);
const t5 = new TreeNode(11);
const t6 = new TreeNode(12);

t0.left = t1;
t0.right = t2;
// t1.left = t5;
// t1.right = t6;
t2.left = t3;
t2.right = t4;

var levelOrder = function (root) {
    let list = [],
        queue = [];
    if (!root) return list;

    queue.push(root);
    while (queue.length) {
        const currentLevelSize = queue.length;
        list.push([]);
        for (let i = 1; i <= currentLevelSize; i++) {
            const node = queue.shift();
            list[list.length - 1].push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return list;
};

const root36 = [3, 9, 20, null, null, 15, 7];

const levelOrders = levelOrder(t0);
console.log(levelOrders);

//37 103. 二叉树的锯齿形层序遍历
var zigzagLevelOrder = function (root) {
    let list = [],
        queue = [],
        l = 0;
    if (!root) return list;

    queue.push(root);
    while (queue.length) {
        const currentLevelSize = queue.length;
        list.push([]);

        for (let i = 1; i <= currentLevelSize; i++) {
            const node = queue.shift();
            l % 2 === 1
                ? list[list.length - 1].unshift(node.val)
                : list[list.length - 1].push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        l++;
    }
    return list;
};

const root37 = [3, 9, 20, null, null, 15, 7];

const zigzagLevelOrders = zigzagLevelOrder(t0);
console.log(zigzagLevelOrders);

//38 236. 二叉树的最近公共祖先
var lowestCommonAncestor = function (root, p, q) {
    // if (!root) return null;
    // const pIndex = root.indexOf(p);
    // const qIndex = root.indexOf(q);
    // let father = 0,
    //     stand = 0;
    // if (pIndex > qIndex) {
    //     father = Math.ceil(pIndex / 2 - 1);
    //     stand = qIndex;
    //     p = root[father];
    // } else {
    //     father = Math.ceil(qIndex / 2 - 1);
    //     stand = pIndex;
    //     q = root[father];
    // }

    // if (father === stand) return root[father];
    // return lowestCommonAncestor(root, p, q);
    if (root === null || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left === null) return right;
    if (right === null) return left;
    return root;
};
const root38 = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];

const t38_0 = new TreeNode(3);
const t38_1 = new TreeNode(5);
const t38_2 = new TreeNode(1);
const t38_3 = new TreeNode(6);
const t38_4 = new TreeNode(2);
const t38_5 = new TreeNode(0);
const t38_6 = new TreeNode(8);
const t38_7 = new TreeNode(7);
const t38_8 = new TreeNode(4);

t38_0.left = t38_1;
t38_0.right = t38_2;
t38_1.left = t38_3;
t38_1.right = t38_4;
t38_2.left = t38_5;
t38_2.right = t38_6;
t38_4.left = t38_7;
t38_4.right = t38_8;

const lowestCommonAncestors = lowestCommonAncestor(t38_0, t38_7, t38_6);
console.log(lowestCommonAncestors);

//39 230. 二叉搜索树中第 K 小的元素

const root = [5, 3, 6, 2, 4, null, null, 1],
    k39 = 4;
const t39_0 = new TreeNode(5);
const t39_1 = new TreeNode(3);
const t39_2 = new TreeNode(6);
const t39_3 = new TreeNode(2);
const t39_4 = new TreeNode(4);
const t39_5 = new TreeNode(1);
t39_0.left = t39_1;
t39_0.right = t39_2;
t39_1.left = t39_3;
t39_1.right = t39_4;
t39_3.left = t39_5;

var kthSmallest = function (root, k) {
    let arr = [],
        res;
    function dfs(root) {
        if (root === null) return;
        dfs(root.left);
        // console.log(k);
        // arr.push(root.val);
        // if (k === 0) return;
        if (--k === 0) res = root.val;
        dfs(root.right);
    }
    dfs(root);
    return res;
};

const kthSmallests = kthSmallest(t39_0, k39);
console.log('No.39 230. 二叉搜索树中第 K 小的元素');
console.log(kthSmallests);

//40 235. 二叉搜索树的最近公共祖先
const t0_40 = new TreeNode(6);
const t1_40 = new TreeNode(2);
const t2_40 = new TreeNode(8);
const t3_40 = new TreeNode(0);
const t4_40 = new TreeNode(4);
const t5_40 = new TreeNode(7);
const t6_40 = new TreeNode(9);
const t7_40 = new TreeNode(3);
const t8_40 = new TreeNode(5);

t0_40.left = t1_40;
t0_40.right = t2_40;
t1_40.left = t3_40;
t1_40.right = t4_40;
t2_40.left = t5_40;
t2_40.right = t6_40;
t4_40.left = t7_40;
t4_40.right = t8_40;

var lowestCommonSearchAncestor = function (root, p, q) {
    if (root === null) return root;
    if (p.val < root.val && q.val < root.val)
        return lowestCommonSearchAncestor(root.left, p, q);
    if (p.val > root.val && q.val > root.val)
        return lowestCommonSearchAncestor(root.right, p, q);
    return root;
};
const lowestCommonSearchAncestors = lowestCommonSearchAncestor(
    t0_40,
    t1_40,
    t5_40
);
console.log('No.40 235. 二叉搜索树的最近公共祖先');

console.log(lowestCommonSearchAncestors);

//41 215. 数组中的第K个最大元素
var findKthLargest = function (nums, k) {
    nums.sort((a, b) => b - a);
    console.log(nums);
    return nums[k - 1];
};
const nums41 = [3, 2, 3, 1, 2, 4, 5, 5, 6],
    k41 = 4;
const findKthLargests = findKthLargest(nums41, k41);
console.log(findKthLargests);

const arr = [5, 3, 6, 2, 4, null, null, 1];
const arrs = [];
for (let i = 0; i < 3; i++) {
    arrs.push(-arr[i]);
}
console.log(arrs);

//42 207. 课程表

var canFinish = function (numCourses, prerequisites) {
    for (let i = 0; i < numCourses; i++) {}
};
const numCourses = 2,
    prerequisites = [
        [1, 0],
        [0, 1],
    ];
const canFinishRS = canFinish(numCourses, prerequisites);
console.log(canFinishRS);
