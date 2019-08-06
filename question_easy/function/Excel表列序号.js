// 给定一个Excel表格中的列名称，返回其相应的列序号。

// 例如，

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...
// 示例 1:

// 输入: "A"
// 输出: 1
// 示例 2:

// 输入: "AB"
// 输出: 28
// 示例 3:

// 输入: "ZY"
// 输出: 701

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/excel-sheet-column-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    return s.split("").reduce((a, b) => {
        return a * 26 + b.charCodeAt() - 64;
    }, 0);

};

console.log(titleToNumber("AA"));
// 题解
// 分解字符串，reduce方法进行相加，reduce初始值为0，每次循环 初始值都乘以26，加上b的ascil码值，减去A的ascil码值减一


/**
 * 最优解法
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    s.split('');
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        sum = sum + (s[i].charCodeAt(0) - 64) * 26 ** (s.length - i - 1)
    }
    return sum
};
//思路类似但是不知道为啥会快。。