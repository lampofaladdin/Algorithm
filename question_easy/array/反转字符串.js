// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

//  

// 示例 1：

// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
// 示例 2：

// 输入：["H","a","n","n","a","h"]
// 输出：["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]]
    }
};

reverseString(["h", "e", "l", "l", "o", "p"])

// 题解
// 循环一半，第一个和最后一个进行交换

const reverseString = s => {
    let start = 0
    let end = s.length - 1
    while (start < end) {
        const item = s[start]
        s[start] = s[end]
        s[end] = item
        start++
        end--
    }
    return s
}

//最优解
// 定义一个一个开始值 start，一个最后的值end
// 这两个下标的内容交换
// 当start<end的时候，进行交换
// start+1
// end-1


