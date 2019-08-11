// 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

// 示例 1:

// 输入: S = "loveleetcode", C = 'e'
// 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
// 说明:

// 字符串 S 的长度范围为 [1, 10000]。
// C 是一个单字符，且保证是字符串 S 里的字符。
// S 和 C 中的所有字母均为小写字母。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/shortest-distance-to-a-character
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
    let indexArr = [];
    let len = 0;
    let result = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] == C) {
            indexArr.push(i);
        }
    }
    for (let i = 0; i < S.length; i++) {
        result.push(Math.abs(i - closed(i, indexArr)));
    }
    return result;

}

function closed(index, indexArr) {
    for (let i = 0; i < indexArr.length; i++) {
        if (index <= indexArr[0]) {
            return indexArr[0];
        } else if (index >= indexArr[indexArr.length - 1]) {
            return indexArr[indexArr.length - 1]
        } else if (index >= indexArr[i - 1] && index <= indexArr[i]) {
            return Math.abs(index - indexArr[i - 1]) >= Math.abs(index - indexArr[i]) ? indexArr[i] : indexArr[i - 1];
        } else {
            continue;
        }
    }
}

// 题解：
// 循环，找到C对应字符串S的下标，push到数组内
// 循环字符串找到字符串，定义一个方法，用来寻找当前下标距离哪个下标最近，
// 找到最近的下标，相减取最小值，返回数组
// 结论：脑壳不好使，只想到这种办法


/**最优解法
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
    let res = new Array(S.length);
    let pre = Infinity;
    for (let i = 0; i < S.length; i++) {
        if (S[i] == C) {
            pre = i
        }
        res[i] = Math.abs(i - pre)

    }
    pre = Infinity;
    for (let i = S.length - 1; i >= 0; i--) {
        if (S[i] == C) {
            pre = i
        }
        res[i] = Math.min(res[i], Math.abs(pre - i))

    }
    return res;

};

console.log(shortestToChar("loveleetcode", 'e'))

//最优解法
// 定义一个空数组，数组长度为字符串的长度
// 定义一个最大值pre，正序循环数组，当查到到C在S中的下标，pre就为当前下标，用pre-i的绝对值，得到正序循环的数组，
// pre为最大值，倒序循环数组，当查找到C在S中的下表，pre的值为当前下标，比较当前res[i]和pre-i的值哪个小，小的为当前res[i]的值
// 结论：卧槽！！！这些人怎么脑子这么好使的？？？？？？？？我要不要转行