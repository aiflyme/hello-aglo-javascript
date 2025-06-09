/* 键值对 Number -> String */
class Pair {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

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
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].val;
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
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket[i].val = val;

                return;
            }
        }

        const pair = new Pair(key, val);
        bucket.push(pair);
        this.#size++;
    }

    remove(key) {
        const index = this.#hashFunc(key);
        const bucket = this.#buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                this.#size--;
                break;
            }
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
        for (let i = 0; i < this.#buckets.length; i++) {
            const bucket = this.#buckets[i];
            let res = [];
            for (let j = 0; j < bucket.length; j++) {
                res.push(`${bucket[j].key} -> ${bucket[j].val} `);
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
HashMapChain.set(12227, '小呀');
HashMapChain.set(12228, '小呀');
HashMapChain.set(12220, '小呀');

console.log('Self HashMapChaining :');

console.log(HashMapChain.get(12227), HashMapChain.get(12220));
HashMapChain.remove(12223);
console.log(HashMapChain.get(12223));

console.log('Self HashMapChaining end:');

HashMapChain.print();
