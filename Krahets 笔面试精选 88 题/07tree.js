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
t1.left = t5;
t1.right = t6;
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

const root36 = [3, 9, 20, 11, 12, 15, 7];

const levelOrders = levelOrder(t0);
console.log(levelOrders);

//37 230 二叉搜索树中第 K 小的元素

//38 235. 二叉搜索树的最近公共祖先
const t0_38 = new TreeNode(6);
const t1_38 = new TreeNode(2);
const t2_38 = new TreeNode(8);
const t3_38 = new TreeNode(0);
const t4_38 = new TreeNode(4);
const t5_38 = new TreeNode(7);
const t6_38 = new TreeNode(9);
const t7_38 = new TreeNode(3);
const t8_38 = new TreeNode(5);

t0_38.left = t1_38;
t0_38.right = t2_38;
t1_38.left = t3_38;
t1_38.right = t4_38;
t2_38.left = t5_38;
t2_38.right = t6_38;
t4_38.left = t7_38;
t4_38.right = t8_38;

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root === null) return root;
    if (p.val < root.val && q.val < root.val) {
        const left = lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        const right = lowestCommonAncestor(root.right, p, q);
    }

    return root;
};
const lowestCommonAncestors = lowestCommonAncestor(t0_38, t1_38, t4_38);
console.log(lowestCommonAncestors);
//39 215. 数组中的第K个最大元素
var findKthLargest = function (nums, k) {
    nums.sort((a, b) => b - a);
    console.log(nums);
    return nums[k - 1];
};
const nums39 = [3, 2, 3, 1, 2, 4, 5, 5, 6],
    k39 = 4;
const findKthLargests = findKthLargest(nums39, k39);
console.log(findKthLargests);
