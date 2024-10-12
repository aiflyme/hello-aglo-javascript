//11 438. 找到字符串中所有字母异位词
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const arr = new Array(26).fill(0);

    // console.log(s.codePointAt(0));
    // console.log('a'.codePointAt(0));

    // console.log(1, arr[s.codePointAt(0) - 'a'.codePointAt(0)]);

    for (let i = 0; i < s.length; i++) {
        arr[s.codePointAt(i) - 'a'.codePointAt(0)]++;
        arr[t.codePointAt(i) - 'a'.codePointAt(0)]--;
    }

    for (v of arr) {
        if (v !== 0) return false;
    }
    return true;
};

const s = 'anagram';
const t = 'nagaram';
console.log([...s].sort().join(''));
console.log([...t].sort().join(''));
const isAnagrams = isAnagram(s, t);
console.log(isAnagrams);

//12 387. 字符串中的第一个唯一字符
var firstUniqChar = function (s) {
    if (s.length === 0) return -1;
    const uniqueLetter = new Map();

    for (let i = 0; i < s.length; i++) {
        uniqueLetter.set(
            s[i],
            uniqueLetter.get(s[i]) ? uniqueLetter.get(s[i]) + 1 : 1
        );
    }

    for (v of uniqueLetter.entries()) {
        if (v[1] === 1) return s.indexOf(v[0]);
    }
    return -1;

    //console.log(uniqueLetter);
};

s12 = 'leetcode';
console.log(s12.indexOf('e'));
const findFirstUniqChar = firstUniqChar(s12);
console.log(findFirstUniqChar);

//13 205. 同构字符串
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    const uniqueLetterS = new Map();
    const uniqueLetterT = new Map();
    for (let i = 0; i < s.length; i++) {
        const x = s[i],
            y = t[i];

        console.log(uniqueLetterS, uniqueLetterS.get(s[i]), y);
        console.log(uniqueLetterT, uniqueLetterT.get(t[i]), x);
        if (
            (uniqueLetterS.get(s[i]) && uniqueLetterS.get(s[i]) !== y) ||
            (uniqueLetterT.get(t[i]) && uniqueLetterT.get(t[i]) !== x)
        ) {
            return false;
        }
        uniqueLetterS.set(s[i], y);
        uniqueLetterT.set(t[i], x);
    }
    return true;
    // let newLetter = t13,
    //     exp = '';
    // for (const [val, index] of uniqueLetter.entries()) {
    //     //console.log(val, index);
    //     //exp = new RegExp(index, 'g');
    //     newLetter = newLetter.replace(new RegExp(index, 'g'), val);
    // }
    // return newLetter === s13 ? true : false;
};

const s13 = 'bb',
    t13 = 'af';
const isIsomorphics = isIsomorphic(s13, t13);

console.log(isIsomorphics);

//14 need plus

//15 409. 最长回文串
var longestPalindrome = function (s) {
    //s = _.countBy;
    const uniqueLetter = new Map();

    for (let i = 0; i < s.length; i++) {
        uniqueLetter.set(
            s[i],
            uniqueLetter.get(s[i]) ? uniqueLetter.get(s[i]) + 1 : 1
        );
    }
    let single = 0,
        acc = 0;
    for (v of uniqueLetter) {
        if (v[1] % 2 === 1) {
            acc += v[1] - 1;
            single = 1;
        } else if (v[1] % 2 === 0) {
            acc += v[1];
        }
    }
    console.log(uniqueLetter);
    return acc + single;
};

s15 = 'abccccdd';
const longestPalindromeOutput = longestPalindrome(s15);
console.log(longestPalindromeOutput);
