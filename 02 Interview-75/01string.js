/**
 * @param {string} password
 * @param {number} target
 * @return {string}
 */
//01 LCR 122. 路径加密
var pathEncryption = function (path) {
    //return path.replaceAll('.', ' ');
    path = path.split('');

    for (let i = 0; i < path.length; i++) {
        if (path[i] === '.') path[i] = ' ';
    }
    return path.join('');
};
let path01 = 'a.aef.qerf.bb';
const pathEncryptionRS = pathEncryption(path01);
console.log(pathEncryptionRS);

//20 LCR 182. 动态口令
console.log('20 LCR 182. 动态口令');
var dynamicPassword = function (password, target) {
    const res = [];
    password = password.split('');

    for (let i = 0; i < target; i++) {
        res.push(password[0]);
        password.shift();
    }

    return [...password].join('') + [...res].join('');
};
const password02 = 's3cur1tyC0d3',
    target02 = 4;
const dynamicPasswordRS = dynamicPassword(password02, target02);
console.log(dynamicPasswordRS);

//LCR 138. 有效数字

var validNumber = function (s) {
    // let res = false;
    // s = s.trim();
    // 小数
    // if (s[0] === '-' || s[0] === '+' || (s[0]>0 && s[0]<=9)) {
    //     //至少一位数字，后面跟着一个点 '.'
    //     //至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
    //     //一个点 '.' ，后面跟着至少一位数字
    //     if(s[1] === '.' || (s[1]>0 && s[1]<=9))res = true;
    // }
    // //整数
    // else if((s[0]>0 && s[0]<=9))
};

const s03 = '0sad';
const validNumberRS = validNumber(s03);
console.log(validNumberRS);
console.log(s03[0], s03[2], s03[4]);

//04 LCR 192. 把字符串转换成整数 (atoi)
console.log('No.04 LCR 192. 把字符串转换成整数 (atoi)');
var myAtoi = function (str) {
    str = str.trim();
    if (str.length === 0) return 0;
    let i = 1,
        res = 0,
        sign = 1;
    if (str[0] === '-') sign = -1;
    else if (str[0] !== '+') i = 0;
    for (let j = i; j < str.length; j++) {
        if (str[j] < '0' || str[j] > '9') break;
        res = res * 10 + (str[j] - 0);
    }

    if (sign * res < -1 * Math.pow(2, 31)) return -1 * Math.pow(2, 31);
    else if (sign * res > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

    return sign * res;
    console.log(str);
    //str = str.trim();
    // let res = '';
    // for (let i = 0; i < str.length; i++) {
    //     if (
    //         i === 0 &&
    //         str[i] !== '-' &&
    //         str[i] !== '+' &&
    //         !(str[i] >= 0 && str[i] <= 9)
    //     )
    //         return 0;
    //     if (
    //         (str[i] === ' ' ||
    //             str[i] === '.' ||
    //             str[i] === '+' ||
    //             str[i] === '-') &&
    //         res === ''
    //     )
    //         continue;
    //     else if ((str[i] === ' ' || str[i] === '.') && res) return Number(res);
    //     else if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90)
    //         return Number(res);
    //     else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122)
    //         return Number(res);
    //     if (str[i] === '-' && res === '') res += '-';
    //     if (str[i] >= 0 && str[i] <= 9) res += str[i];
    // }

    // if (Number(res) < Math.pow(-2, 31)) return Math.pow(-2, 31);
    // else if (Number(res) > Math.pow(2, 31) - 1) return Math.pow(2, 31) + 1;
    // return isNaN(res) ? 0 : Number(res);
};

const str04 = '2147483648';
const myAtoiRS = myAtoi(str04);
console.log(myAtoiRS);
