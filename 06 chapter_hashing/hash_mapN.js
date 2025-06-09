const map = new Map();

map.set(12223, '小哈');
map.set(12224, '小罗');
map.set(12225, '小算');
map.set(12226, '小法');
map.set(12227, '小鸭');
map.set(12227, '小呀');

console.log(map, map.get(12227), map.get(12220));
map.delete(12223);
console.log(map);

for (const [k, v] of map.entries()) {
    console.log(k + ' -> ' + v);
}

for (const k of map.keys()) {
    console.log(k);
}

for (const v of map.values()) {
    console.log(v);
}

//array_hash_map
class Pair {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

class ArrayHashMap {
    #buckets;

    constructor() {
        this.#buckets = new Array(100).fill(null);
    }

    //hash
    #hashFunc(key) {
        return key % 100;
    }

    get(key) {
        let index = this.#hashFunc(key);
        let pair = this.#buckets[index];
        if (pair === null) return null;
        return pair.val;
    }

    set(key, val) {
        let index = this.#hashFunc(key);
        this.#buckets[index] = new Pair(key, val);
    }

    delete(key) {
        let index = this.#hashFunc(key);
        this.#buckets[index] = null;
    }

    entries() {
        let arr = [];
        for (let i = 0; i < this.#buckets.length; i++) {
            if (this.#buckets[i]) arr.push(this.#buckets[i]);
        }
        return arr;
    }

    keys() {
        let arr = [];
        for (let i = 0; i < this.#buckets.length; i++) {
            if (this.#buckets[i]) arr.push(this.#buckets[i].key);
        }
        return arr;
    }

    values() {
        let arr = [];
        for (let i = 0; i < this.#buckets.length; i++) {
            if (this.#buckets[i]) arr.push(this.#buckets[i].val);
        }
        return arr;
    }

    print() {
        let pairSet = this.entries();
        for (const pair of pairSet) {
            console.info(`${pair.key} -> ${pair.val}`);
        }
    }
}

const arrMap = new ArrayHashMap();

arrMap.set(12223, '小哈');
arrMap.set(12224, '小罗');
arrMap.set(12225, '小算');
arrMap.set(12226, '小法');
arrMap.set(12227, '小鸭');
arrMap.set(12227, '小呀');

console.log('Self map :');

console.log(arrMap.get(12227), arrMap.get(12220));
arrMap.delete(12223);

console.log(arrMap.print());

//hash_map_chaining
class HashMapChaining {
    #size;
    #capacity;
    #loadThres;
    #extendRatio;
    #buckets;

    constructor() {
        this.#size = 0;
        this.#capacity = 4;
        this.#loadThres = 0.8; // 触发扩容的负载因子阈值
        this.#extendRatio = 2;
        this.#buckets = new Array(this.#capacity).fill(null).map((x) => []);
    }

    #hashFunc(key) {
        return key % this.#capacity;
    }

    /* 负载因子 */
    #loadFactor() {
        return this.#size / this.#capacity;
    }

    get(key) {
        const index = this.#hashFunc(key);
        const bucket = this.#buckets[index];

        for (const pair of bucket) {
            if (pair.key === key) {
                return pair.val;
            }
        }

        return null;
    }

    set(key, val) {
        if (this.#loadFactor() > this.#loadThres) {
            this.#extend();
        }

        const index = this.#hashFunc(key);
        const bucket = this.#buckets[index];
        for (const pair of bucket) {
            if (pair.key === key) {
                pair.val = val;
                return;
            }
        }

        //无key,添加新的pair到bucket尾部
        const pair = new Pair(key, val);
        bucket.push(pair);
        this.#size++;
    }

    remove(key) {
        const index = this.#hashFunc(key);
        let bucket = this.#buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) bucket.splice(i, 1);
            this.#size--;
            break;
        }
    }

    #extend() {
        const bucketsTmp = this.#buckets;

        this.#capacity *= this.#extendRatio;
        this.#buckets = new Array(this.#capacity).fill(null).map((x) => []);
        this.#size = 0;

        for (const bucket of bucketsTmp) {
            for (const pair of bucket) {
                this.set(pair.key, pair.val);
            }
        }
    }

    print() {
        for (const bucket of this.#buckets) {
            let res = [];
            for (const pair of bucket) {
                res.push(pair.key + ' --> ' + pair.val);
            }

            console.log(res);
        }
    }
}

console.log(`HashMapChaining: `);

const HashMapChain = new HashMapChaining();

HashMapChain.set(12223, '小哈');
HashMapChain.set(12224, '小罗');
HashMapChain.set(12225, '小算');
HashMapChain.set(12226, '小法');
HashMapChain.set(12227, '小鸭');
HashMapChain.set(12327, '小雅');
HashMapChain.print();

console.log('Self HashMapChaining :');

console.log(HashMapChain.get(12227), HashMapChain.get(12220));
HashMapChain.remove(12224);
console.log(HashMapChain.get(12224));

console.log('Self HashMapChaining end:');

HashMapChain.print();

/* 开放寻址哈希表 */
class HashMapOpenAddressing {
    #size; // 键值对数量
    #capacity; // 哈希表容量
    #loadThres; // 触发扩容的负载因子阈值
    #extendRatio; // 扩容倍数
    #buckets; // 桶数组
    #TOMBSTONE; // 删除标记
    /* 构造方法 */
    constructor() {
        this.#size = 0; // 键值对数量
        this.#capacity = 4; // 哈希表容量
        this.#loadThres = 2.0 / 3.0; // 触发扩容的负载因子阈值
        this.#extendRatio = 2; // 扩容倍数
        this.#buckets = Array(this.#capacity).fill(null); // 桶数组
        this.#TOMBSTONE = new Pair(-1, '-1'); // 删除标记
    }

    #hashFunc(key) {
        return key % this.#capacity;
    }

    #loadFactor() {
        return this.#size / this.#capacity;
    }

    #findBucket(key) {
        let index = this.#hashFunc(key);
        let firstTombstone = -1;

        //线性探测，当遇到空桶时跳出
        while (this.#buckets[index] !== null) {
            //若遇到key,返回对应的桶索引
            if (this.#buckets[index].key === key) {
                //若之前遇到了删除标记，则将键值对移动至该索引处
                if (firstTombstone !== -1) {
                    this.#buckets[firstTombstone] = this.#buckets[index];
                    this.#buckets[index] = this.#TOMBSTONE;
                    return firstTombstone; //返回移动后的桶索引
                }
                return index; //返回桶索引
            }

            //记录遇到的首个删除标记
            if (
                firstTombstone === -1 &&
                this.#buckets[index] === this.#TOMBSTONE
            ) {
                firstTombstone = index;
            }
            //计算桶索引，超过尾部则返回头部
            index = (index + 1) % this.#capacity;
        }
        // 若KEY不存在;
        return firstTombstone === -1 ? index : firstTombstone;
    }
}
