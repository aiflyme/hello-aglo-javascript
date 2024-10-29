// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

//27 LCR 149. 彩灯装饰记录 I

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var decorateRecord = function (root) {
    if (root === null) return [];
    const res = [],
        queue = [];
    queue.push(root);
    while (queue.length > 0) {
        const node = queue.shift();

        // if (node === null) {
        //     res.push(new TreeNode(null));
        //     continue;
        // }
        res.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        // if (node.left || node.right) {
        //     node.left ? queue.push(node.left) : queue.push(new TreeNode(null));
        //     node.right
        //         ? queue.push(node.right)
        //         : queue.push(new TreeNode(null));
        // }
    }

    return res;
};

//const root27 = [8, 17, 21, 18, null, null, 6];

const node27_01 = new TreeNode(8),
    node27_02 = new TreeNode(17),
    node27_03 = new TreeNode(18),
    node27_04 = new TreeNode(21),
    node27_05 = new TreeNode(6);

node27_01.left = node27_02;
node27_01.right = node27_04;
node27_02.left = node27_03;
node27_04.right = node27_05;
const decorateRecordRS = decorateRecord(node27_01);
console.log(decorateRecordRS);

//28 LCR 150. 彩灯装饰记录 II
console.log('No.彩灯装饰记录 II');

var decorateRecordII = function (root) {
    if (root === null) return [];
    const res = [],
        queue = [];
    queue.push(root);

    while (queue.length > 0) {
        const tmp = [],
            len = queue.length;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            tmp.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        res.push(tmp);
    }
    return res;
};

const node28_01 = new TreeNode(8),
    node28_02 = new TreeNode(17),
    node28_03 = new TreeNode(18),
    node28_04 = new TreeNode(21),
    node28_05 = new TreeNode(6);

node28_01.left = node28_02;
node28_01.right = node28_04;
node28_02.left = node28_03;
node28_04.right = node28_05;
const decorateRecordIIRS = decorateRecordII(node28_01);
console.log(decorateRecordIIRS);

//29 LCR 151. 彩灯装饰记录 III
console.log('No.29 LCR 151. 彩灯装饰记录 III');
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var decorateRecordIII = function (root) {
    if (!root) return [];
    const res = [],
        queue = [];
    queue.push(root);

    while (queue.length > 0) {
        const tmp = [],
            len = queue.length;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            if (res.length % 2 === 0) tmp.push(node.val);
            else tmp.unshift(node.val);
        }
        if (tmp.length > 0) res.push(tmp);

        // const tmp2 = [],
        //     len2 = queue.length;
        // for (let i = 0; i < len2; i++) {
        //     const node2 = queue.shift();
        //     if (node2.left) queue.push(node2.left);
        //     if (node2.right) queue.push(node2.right);
        //     tmp2.unshift(node2.val);
        // }
        // if (tmp2.length > 0) res.push(tmp2);
    }
    return res;
};

const node29_01 = new TreeNode(8),
    node29_02 = new TreeNode(17),
    node29_03 = new TreeNode(18),
    node29_04 = new TreeNode(21),
    node29_05 = new TreeNode(6);

node29_01.left = node29_02;
node29_01.right = node29_04;
node29_02.left = node29_03;
node29_04.right = node29_05;

const decorateRecordIIIRS = decorateRecordIII(node29_01);
console.log(decorateRecordIIIRS);

//30 LCR 143. 子结构判断
console.log('No.30 LCR 143. 子结构判断');
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (A === null || B === null) return false;

    const recur = function (A, B) {
        if (B === null) return true;
        if (A === null) return false;
        if (A.val !== B.val) return false;

        return recur(A.left, B.left) && recur(A.right, B.right);
    };
    return (
        recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
    );
};

const node30_01 = new TreeNode(3),
    node30_02 = new TreeNode(6),
    node30_03 = new TreeNode(7),
    node30_04 = new TreeNode(1),
    node30_05 = new TreeNode(8);

node30_01.left = node30_02;
node30_01.right = node30_03;

node30_02.left = node30_04;
node30_02.right = node30_05;

const node30_02_01 = new TreeNode(6),
    node30_02_02 = new TreeNode(1);
node30_02_01.left = node30_02_02;

const isSubStructureRS = isSubStructure(node30_01, node30_02_01);
// console.log(node30_01, node30_02_01);
console.log(isSubStructureRS);

//31 LCR 144. 翻转二叉树
console.log('No.31 LCR 144. 翻转二叉树');
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var flipTree = function (root) {
    const dfs = function (root) {
        // if (root.left && root.right) {
        [root.left, root.right] = [root.right, root.left];
        // }

        if (root.left) {
            dfs(root.left);
        }
        if (root.right) {
            dfs(root.right);
        }
    };
    dfs(root);
    return root;
};

const node31_01 = new TreeNode(5),
    node31_02 = new TreeNode(7),
    node31_03 = new TreeNode(9),
    node31_04 = new TreeNode(8),
    node31_05 = new TreeNode(3),
    node31_06 = new TreeNode(2),
    node31_07 = new TreeNode(4);

node31_01.left = node31_02;
node31_01.right = node31_03;

node31_02.left = node31_04;
node31_02.right = node31_05;

node31_03.left = node31_06;
node31_03.right = node31_07;

const flipTreeRS = flipTree(node31_01);
console.log(flipTreeRS);

//32 LCR 145. 判断对称二叉树
console.log('No.32 LCR 145. 判断对称二叉树');
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkSymmetricTree = function (root) {
    if (root === null) return false;

    const recur = function (left, right) {
        if (left === null && right === null) return true;
        if (left === null || right === null || left.val != right.val)
            return false;
        return recur(left.left, right.right) && recur(left.right, right.left);
    };
    return recur(root.left, root.right);
};

const node32_01 = new TreeNode(1),
    node32_02 = new TreeNode(2),
    node32_03 = new TreeNode(2),
    node32_04 = new TreeNode(3),
    node32_05 = new TreeNode(4),
    node32_06 = new TreeNode(4),
    node32_07 = new TreeNode(3);

node32_01.left = node32_02;
node32_01.right = node32_03;

node32_02.left = node32_04;
node32_02.right = node32_05;

node32_03.left = node32_06;
node32_03.right = node32_07;

const checkSymmetricTreeRS = checkSymmetricTree(node32_01);
console.log(checkSymmetricTreeRS);

//33 字母迷宫

//34 衣橱整理

//35 二叉树中和为目标值的路径

//36 将二叉搜索树转化为排序的双向链表

//37 寻找二叉搜索树中的目标节点
console.log('No.37 寻找二叉搜索树中的目标节点');
var findTargetNode = function (root, cnt) {
    if (root === null) return -1;
    const res = [];
    const dfs = function (node, res, cnt) {
        if (node === null) return;

        dfs(node.right, res, cnt);

        res.push(node.val);
        if (res.length === cnt) return;
        dfs(node.left, res, cnt);
    };
    dfs(root, res, cnt);
    return res[cnt - 1];
    //rs[rs.length - 2];
};

const cnt37 = 2,
    node37_01 = new TreeNode(7),
    node37_02 = new TreeNode(3),
    node37_03 = new TreeNode(9),
    node37_04 = new TreeNode(1),
    node37_05 = new TreeNode(5);
node37_01.left = node37_02;
node37_01.right = node37_03;

node37_02.left = node37_04;
node37_02.right = node37_05;

const findTargetNodeRS = findTargetNode(node37_01, cnt37);
console.log(findTargetNodeRS);

//38 计算二叉树的深度
console.log('No.38. 计算二叉树的深度');
var calculateDepth = function (root) {
    //method 1
    //if (root === null) return 0;
    //return Math.max(calculateDepth(root.left), calculateDepth(root.right)) + 1;

    //mdthod 2
    const queue = [];
    queue.push(root);
    let res = 1;
    while (queue.length > 0) {
        const len = queue.length;
        const tmp = [];
        for (let i = 0; i < len; i++) {
            const node = queue.pop();
            if (node.left) tmp.push(node.left);
            if (node.right) tmp.push(node.right);
        }
        if (tmp.length > 0) {
            queue.push(...tmp);
            res += 1;
        }
    }
    return res;
};
const node38_01 = new TreeNode(1),
    node38_02 = new TreeNode(2),
    node38_03 = new TreeNode(2),
    node38_04 = new TreeNode(3),
    node38_05 = new TreeNode(5),
    node38_06 = new TreeNode(4),
    node38_07 = new TreeNode(4);

node38_01.left = node38_02;
node38_01.right = node38_03;

node38_02.left = node38_04;
node38_03.right = node38_05;

node38_04.left = node38_06;
node38_05.right = node38_07;

const calculateDepthRS = calculateDepth(node38_01);
console.log(calculateDepthRS);

//39 LCR 176. 判断是否为平衡二叉树
console.log('No.39 LCR 176. 判断是否为平衡二叉树');
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    const recur = function (node) {
        if (node === null) return 0;
        const left = recur(node.left);
        if (left === -1) return -1;
        const right = recur(node.right);
        if (right === -1) return -1;
        return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
    };

    return recur(root) !== -1;
};

const node39_01 = new TreeNode(3),
    node39_02 = new TreeNode(9),
    node39_03 = new TreeNode(20),
    node39_04 = new TreeNode(15),
    node39_05 = new TreeNode(7),
    node39_06 = new TreeNode(8);
node39_01.left = node39_02;
node39_01.right = node39_03;

node39_03.left = node39_04;
node39_03.right = node39_05;
// node39_05.right = node39_06;

const isBalancedRS = isBalanced(node39_01);
console.log(node39_01);
console.log(isBalancedRS);
