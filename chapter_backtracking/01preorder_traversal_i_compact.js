const { arrToTree } = require('../modules/TreeNode');
const { printTree } = require('../modules/PrintUtil');

function preOrder(root, res) {
    if (root === null) {
        return;
    }
    if (root.val === 7) {
        res.push(root);
    }

    preOrder(root.left, res);
    preOrder(root.right, res);
}

// Driver Code
const root = arrToTree([1, 7, 3, 4, 5, 6, 7]);
console.log('\n初始化二叉树');
printTree(root);

// 前序遍历
const res = [];
preOrder(root, res);

console.log('\n输出所有值为 7 的节点');
console.log(res.map((node) => node));
