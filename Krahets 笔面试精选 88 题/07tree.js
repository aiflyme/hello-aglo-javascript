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
