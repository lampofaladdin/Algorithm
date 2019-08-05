// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 示例 1:

// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 
// 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

// 在真实的面试中遇到过这

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(" ").map(item => {
        return [...item].reverse().join("");
    }).join(" ");
};

reverseWords("Let's take LeetCode contest");

// 题解
// 根据空格分隔字符串，map遍历，遍历到的每个item解构为一个数组，然后使用reverse方法进行翻转，然后使用join方法再变成字符串
// map遍历完毕后为一个翻转好字符串的数组，用join方法进行连接