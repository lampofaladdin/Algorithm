// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:

// 输入: 121
// 输出: true
// 示例 2:

// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3:

// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。
// 进阶:

// 你能不将整数转为字符串来解决这个问题吗？

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
    return x  === x.toString().split('').reverse().join('')
};  

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 ) return false
    if(x < 10) return true
    const arr = []
    while(x > 0 ){
        arr.push(x % 10)
        x = Math.floor(x / 10)
    }
    const len = arr.length
    const mid = len / 2
    for(let i = 0; i <= mid; i++){
        if(arr[i] !== arr[len-i-1]) return false
    }
    return true
};  

console.log(isPalindrome(12000021))

// 题解
// 1、 字符串解体
// 数字变成字符串，字符串转成数组，颠倒数组，转成字符串

// 2、 数字解题
// 数字转成数组，然后匹配数组第一个跟最后一个是否相同
