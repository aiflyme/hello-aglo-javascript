/* Driver Code */

const { printTree } = require('../modules/PrintUtil');

const { TreeNode } = require('../modules/TreeNode');

function dfs(preorder, inorderMap, i, l, r) {
    if (r - l < 0) return null;

    //initial
    const root = new TreeNode(preorder[i]);
    //找到m , divide left and right
    const m = inorderMap.get(preorder[i]);

    //construt left tree
    root.left = dfs(preorder, inorderMap, i + 1, l, m - 1);

    //construt right tree
    root.right = dfs(preorder, inorderMap, i + 1 + m - l, m + 1, r);

    return root;
}

function buildTree(preorder, inorder) {
    //initial hashmap, save inorder element to index
    let inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }
    const root = dfs(preorder, inorderMap, 0, 0, inorder.length - 1);
    return root;
}

const preorder = [3, 9, 2, 1, 7];
const inorder = [9, 3, 1, 2, 7];
console.log('前序遍历 = ' + JSON.stringify(preorder));
console.log('中序遍历 = ' + JSON.stringify(inorder));
const root = buildTree(preorder, inorder);
console.log('构建的二叉树为：');
printTree(root);
