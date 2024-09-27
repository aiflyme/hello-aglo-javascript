// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

//50 226. 翻转二叉树
var invertTree = function (root) {
    if (root === null) return root;
    if (root.left || root.right) {
        invertTree(root.left);
        invertTree(root.right);
        [root.left, root.right] = [root.right, root.left];
    }
    return root;
};

const t0_50 = new TreeNode(4);
const t1_50 = new TreeNode(2);
const t2_50 = new TreeNode(7);
const t3_50 = new TreeNode(1);
const t4_50 = new TreeNode(3);
const t5_50 = new TreeNode(6);
const t6_50 = new TreeNode(9);
t0_50.left = t1_50;
t0_50.right = t2_50;

t1_50.left = t3_50;
t1_50.right = t4_50;

t2_50.left = t5_50;
t2_50.right = t6_50;
const invertTreeRS = invertTree(t0_50);
console.log(invertTreeRS);

//51 101. 对称二叉树
//method 1
// var invertTree2 = function (root) {
//     if (root === null) return null;
//     if (root.left || root.right) {
//         if (root.left) invertTree2(root.left);
//         if (root.right) invertTree2(root.right);
//     }
//     [root.left, root.right] = [root.right, root.left];
//     return root;
// };

// var isSymmetric = function (root, rootMirror) {
//     if (root === null || rootMirror === null) return false;
//     if (root.val !== rootMirror.val) return false;
//     const rsLeft = isSymmetric(root.left, rootMirror.left);
//     const rsRight = isSymmetric(root.right, rootMirror.right);
//     if (rsLeft === false || rsRight === false) return false;
//     return true;
// };

//method 2
var isSymmetric = function (root) {
    if (root === null) return false;
    const invertTree2 = function (l, r) {
        if (l === null && r === null) return true;
        if (l === null || r === null || l.val != r.val) return false;
        const rs1 = invertTree2(l.left, r.right);
        const rs2 = invertTree2(r.left, l.right);
        if (rs1 && rs2 && l.val === r.val) return true;

        return false;
    };
    //if (root.left && root.right) {
    return invertTree2(root.left, root.right);

    // return false;
};

//test unit 1
const t0_51 = new TreeNode(1);
const t1_51 = new TreeNode(2);
const t2_51 = new TreeNode(2);
const t3_51 = new TreeNode(3);
const t4_51 = new TreeNode(4);
const t5_51 = new TreeNode(4);
const t6_51 = new TreeNode(3);

// t0_51.left = t1_51;
// t0_51.right = t2_51;

// t1_51.left = t3_51;
// t1_51.right = t4_51;

// t2_51.left = t5_51;
// t2_51.right = t6_51;

//test unit 2
// const t0_51 = new TreeNode(1);
// const t1_51 = new TreeNode(2);
// const t2_51 = new TreeNode(2);
// const t3_51 = new TreeNode(3);
// const t4_51 = new TreeNode(3);

// t0_51.left = t1_51;
// t0_51.right = t2_51;

// t1_51.right = t3_51;

// t2_51.right = t4_51;

console.log('No.51 101. 对称二叉树');

const isSymmetricRS = isSymmetric(t0_51);
console.log(isSymmetricRS);

//52 50. Pow(x, n)
var myPow = function (x, n) {
    //return Math.pow(x,n)
    if (x === 0 || x === 1) return x;
    if (n === 0) return 1;
    const caclPow = (x, n) => {
        if (n === 1) return x;
        const half = caclPow(x, Math.floor(n / 2));
        if (n % 2 === 1) {
            return half * half * x;
        } else {
            return half * half;
        }
    };
    const res = caclPow(x, Math.abs(n));
    if (n < 0) return 1 / res;
    return res;
};
const x = 2,
    n = 10;
// const myPowRS = myPow(x, n);
// console.log(myPowRS);

console.log(Math.pow(x, n));

//53 110. 平衡二叉树

var isBalanced = function (root) {
    const recur = (root) => {
        if (root === null) return 0;
        const left = recur(root.left);
        if (left === -1) return -1;
        const right = recur(root.right);
        if (right === -1) return -1;
        return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
    };
    return recur(root) !== -1;
};

//[1,2,2,3,null,null,3,4,null,null,4]

//test unit 1
const t0_53 = new TreeNode(1);
const t1_53 = new TreeNode(2);
const t2_53 = new TreeNode(2);
const t3_53 = new TreeNode(3);
const t4_53 = new TreeNode(3);
const t5_53 = new TreeNode(4);
const t6_53 = new TreeNode(4);
t0_53.left = t1_53;
t0_53.right = t2_53;

t1_53.left = t3_53;
t2_53.right = t4_53;

t3_53.left = t5_53;
t4_53.right = t6_53;

//test unit 2
// const t0_53 = new TreeNode(3);
// const t1_53 = new TreeNode(9);
// const t2_53 = new TreeNode(20);
// const t3_53 = new TreeNode(15);
// const t4_53 = new TreeNode(7);

// t0_53.left = t1_53;
// t0_53.right = t2_53;

// t2_53.left = t3_53;
// t2_53.right = t4_53;

const isBalancedRS = isBalanced(t0_53);
console.log('No.53 110. 平衡二叉树');

console.log(isBalancedRS);

//54 105. 从前序与中序遍历序列构造二叉树
var buildTree = function (preorder, inorder) {
    const buildTrees = (preorder, inorder, i, l, r) => {
        // 子树区间为空时终止
        if (r < l) return null;
        const m = inorder.indexOf(preorder[i]);
        const root = new TreeNode(preorder[i]);
        root.left = buildTrees(preorder, inorder, i + 1, l, m - 1);
        root.right = buildTrees(preorder, inorder, i + 1 + m - l, m + 1, r);
        return root;
    };
    return buildTrees(preorder, inorder, 0, 0, inorder.length - 1);
};

const preorder = [3, 9, 20, 15, 7],
    inorder = [9, 3, 15, 20, 7];
const buildTreeRS = buildTree(preorder, inorder);
console.log('No.54 105. 从前序与中序遍历序列构造二叉树');

console.log(buildTreeRS);
