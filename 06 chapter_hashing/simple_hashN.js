const MODULUS = 1000000007;

function addHash(key) {
    let hash = 0;
    for (const c of key) {
        hash = (hash + c.charCodeAt(0)) % MODULUS;
    }
    return hash;
}

function mulHash(key) {
    let hash = 0;
    for (const c of key) {
        hash = (hash * 31 + c.charCodeAt(0)) % MODULUS;
    }
    return hash;
}

function xorHash(key) {
    let hash = 0;
    for (const c of key) {
        hash ^= c.charCodeAt(0);
    }
    return hash % MODULUS;
}

function rotHash(key) {
    let hash = 0;
    for (const c of key) {
        hash = ((hash << 4) ^ (hash >> 28) ^ c.charCodeAt(0)) % MODULUS;
    }
    return hash % MODULUS;
}

/* Driver Code */
const key = 'He'; //llo 算法

let hash = addHash(key);
console.log('加法哈希值为 ' + hash);

hash = mulHash(key);
console.log('乘法哈希值为 ' + hash);

hash = xorHash(key);
console.log('异或哈希值为 ' + hash);

hash = rotHash(key);
console.log('旋转哈希值为 ' + hash);
