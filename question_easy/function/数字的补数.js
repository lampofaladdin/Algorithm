// 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。

// 注意:

// 给定的整数保证在32位带符号整数的范围内。
// 你可以假定二进制数不包含前导零位。
// 示例 1:

// 输入: 5
// 输出: 2
// 解释: 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
// 示例 2:

// 输入: 1
// 输出: 0
// 解释: 1的二进制表示为1（没有前导零位），其补数为0。所以你需要输出0。

// /**
//  * @param {number} num
//  * @return {number}
//  */
// var findComplement = function (num) {
//     return parseInt(num.toString(2).split("").map(item => item == 0 ? 1 : 0).join(""), 2);
// };

// findComplement(1);

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let str = "";
    num = num.toString(2);
    for (let i of num) {
        if (i == 0) {
            str += "1";
        } else {
            str += "0";
        }
    }
    return parseInt(str, 2);
};

findComplement(5);

// 题解
// 转换为二进制字符串，循环字符串，为1字符串加0，为0字符串加1，使用parseInt方法转换为数字