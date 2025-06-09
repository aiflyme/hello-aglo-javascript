class Pair {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

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
        this.#capacity = 5; // 哈希表容量
        this.#loadThres = 2.0 / 3.0; // 触发扩容的负载因子阈值
        this.#extendRatio = 2; // 扩容倍数
        this.#buckets = Array(this.#capacity).fill(null); // 桶数组
        this.#TOMBSTONE = new Pair(-1, '-1'); // 删除标记
    }

    /* 哈希函数 */
    #hashFunc(key) {
        return key % this.#capacity;
    }

    /* 负载因子 */
    #loadFactor() {
        return this.#size / this.#capacity;
    }

    /* 搜索 key 对应的桶索引 */
    #findBucket(key) {
        let index = this.#hashFunc(key);
        let firstTombstone = -1;

        //开始循环找空位
        while (this.#buckets[index] !== null) {
            //找到已有的KEY就把键值对移至该索引处
            if (this.#buckets[index].key === key) {
                if (firstTombstone !== -1) {
                    this.#findBucket[firstTombstone] = this.#buckets[index];
                    this.#buckets[index] = this.#TOMBSTONE;
                    return firstTombstone; //返回移动后的桶索引
                }
                //找到同一KEY，就返回
                return index;
            }

            //第一个删除位（但还是要循环）
            if (
                this.firstTombstone === -1 &&
                this.#TOMBSTONE === this.#buckets[index]
            ) {
                firstTombstone = index;
            }
            index = (index + 1) % this.#capacity;
        }

        //
        return firstTombstone === -1 ? index : firstTombstone;
    }

    /* 查询操作 */
    get(key) {
        const index = this.#findBucket(key);

        //既不为空，又不是删除记录
        if (
            this.#buckets[index] !== null &&
            this.#buckets[index] !== this.#TOMBSTONE
        ) {
            return this.#buckets[index].val;
        }

        //没找到key
        return null;
    }

    /* 添加操作 */
    put(key, val) {
        if (this.#loadFactor > this.#loadThres) {
            this.#extend();
        }
        const index = this.#findBucket(key);

        if (
            this.#buckets[index] !== null &&
            this.#buckets[index] !== this.#TOMBSTONE
        ) {
            this.#findBucket[index].val = val;
            return;
        }

        this.#buckets[index] = new Pair(key, val);
        this.#size++;
    }

    /* 删除操作 */
    remove(key) {
        const index = this.#findBucket(key);

        //既不为空，又不是删除记录
        if (
            this.#buckets[index] !== null &&
            this.#buckets[index] !== this.#TOMBSTONE
        ) {
            this.#buckets[index] = this.#TOMBSTONE;
            this.#size--;
        }
    }

    /* 扩容哈希表 */
    #extend() {
        const bucketsTmp = this.#buckets;

        this.#capacity *= this.#extendRatio;
        this.#buckets = Array(this.#capacity).fill(null);

        this.#size = 0;

        for (bucket of bucketsTmp) {
            if (bucket !== null && bucket !== this.#TOMBSTONE) {
                this.put(bucket.key, bucket.val);
            }
        }
    }

    /* 打印哈希表 */
    print() {
        for (const pair of this.#buckets) {
            if (pair === null) console.log('null');
            else if (pair === this.#TOMBSTONE) console.log('TOMBSTONE');
            else console.log(`${pair.key} -> ${pair.val}`);
        }
    }
}

/* Driver Code */
// 初始化哈希表
const hashmap = new HashMapOpenAddressing();

// 添加操作
// 在哈希表中添加键值对 (key, val)
hashmap.put(12836, '小哈');
hashmap.put(15937, '小啰');
hashmap.put(16750, '小算');
hashmap.put(13276, '小法');
hashmap.put(10583, '小鸭');
console.log('\n添加完成后，哈希表为\nKey -> Value');
hashmap.print();

// 查询操作
// 向哈希表中输入键 key ，得到值 val
const name = hashmap.get(13276);
console.log('\n输入学号 13276 ，查询到姓名 ' + name);

// 删除操作
// 在哈希表中删除键值对 (key, val)
hashmap.remove(16750);
console.log('\n删除 16750 后，哈希表为\nKey -> Value');
hashmap.print();
