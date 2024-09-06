/* 物品 */
class Item {
    constructor(w, v) {
        this.w = w; // 物品重量
        this.v = v; // 物品价值
    }
}

function fractionalKnapsack(wgt, val, cap) {
    const items = wgt.map((w, i) => new Item(w, val[i]));

    // 按照单位价值 item.v / item.w 从高到低进行排序
    items.sort((a, b) => b.v / b.w - a.v / a.w);

    let res = 0;

    for (const item of items) {
        if (cap === 0) return res;

        if (cap >= item.w) {
            res += item.v;
            cap -= item.w;
        } else {
            res += (cap / item.w) * item.v;
            break;
        }
    }
    return res;
}

/* Driver Code */
const wgt = [10, 20, 30, 40, 50];
const val = [50, 120, 150, 210, 240];
const cap = 50;
const n = wgt.length;

// 贪心算法
const res = fractionalKnapsack(wgt, val, cap);
console.log(`不超过背包容量的最大物品价值为 ${res}`);
