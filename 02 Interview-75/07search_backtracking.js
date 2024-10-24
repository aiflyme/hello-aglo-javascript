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
