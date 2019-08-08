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
    while (S.indexOf(C, len) > -1) {
        indexArr.push(S.indexOf(C, len));
        len = indexArr[indexArr.length - 1] + 1;
    }

    for (let i = 0; i < indexArr.length; i++) {
        let test = [];
        let start = indexArr[i - 1] || 0;
        let end = indexArr[i];
        if (start === 0) {
            for (let j = start; j <= end; j++) {
                test.push(end - j)
            }
        } else if (end === indexArr[indexArr.length - 1]) {
            for (let j = start + 1; j <= end; j++) {
                test.push(Math.min(Math.abs(j - start), Math.abs(j - end)))
            }
            for (let j = end + 1, k = 0; j <= S.length; j++) {
                test.push(k++);
            }
        } else {
            for (let j = start + 1; j <= end; j++) {
                test.push(Math.min(Math.abs(j - start), Math.abs(j - end)))
            }
        }
        result = result.concat(test);
    }
    return result;
}


console.log(shortestToChar("aaba", "b"));

//待完成