// 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

// 你可以返回满足此条件的任何数组作为答案。

//  

// 示例：

// 输入：[3,1,2,4]
// 输出：[2,4,3,1]
// 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
//  

// 提示：

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

/**
 * @param {number[]} A
 * @return {number[]}
 */
// var sortArrayByParity = function (A) {
//     let oddArr = [];
//     let evenArr = [];
//     A.forEach(item => {
//         if (item % 2 == 0) {
//             evenArr.push(item);
//         } else {
//             oddArr.push(item);
//         }
//     });
//     return evenArr.concat(oddArr);
// };

// sortArrayByParity([3, 1, 2, 4]);


/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    let result = [];
    A.forEach(item => {
        if (item % 2 == 0) {
            result.unshift(item);
        } else {
            result.push(item);
        }
    });
    console.log(result);
    return result;
};
sortArrayByParity([3, 1, 2, 4]);

//题解
// 由于最开始没想起用unshift方法，所以后面优化了一下，
// 遍历数组中的内容，是偶数加到数组开头，是偶数加到数组末尾。