const { arrToTree } = require('../modules/TreeNode');
const { printTree } = require('../modules/PrintUtil');

function preOrder(root, path, res) {
    if (root === null) return;

    path.push(root);
    if (root.val === 7) {
        res.push([...path]);
    }

    preOrder(root.left, path, res);
    preOrder(root.right, path, res);

    //回退 back
    path.pop();
}

// Driver Code
const root = arrToTree([1, 7, 3, 4, 5, 6, 7]);
console.log('\n初始化二叉树');
printTree(root);

// 前序遍历
const path = [];
const res = [];
preOrder(root, path, res);

console.log('\n输出所有根节点到节点 7 的路径');
res.forEach((path) => {
    console.log(path.map((node) => node.val));
});

const arr = [];
const data1 = [1, 7, 5];
