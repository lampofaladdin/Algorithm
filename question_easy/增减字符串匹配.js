// 给定只含 "I"（增大）或 "D"（减小）的字符串 S ，令 N = S.length。

// 返回 [0, 1, ..., N] 的任意排列 A 使得对于所有 i = 0, ..., N-1，都有：

// 如果 S[i] == "I"，那么 A[i] < A[i+1]
// 如果 S[i] == "D"，那么 A[i] > A[i+1]
//  

// 示例 1：

// 输出："IDID"
// 输出：[0,4,1,3,2]
// 示例 2：

// 输出："III"
// 输出：[0,1,2,3]
// 示例 3：

// 输出："DDI"
// 输出：[3,2,0,1]
//  

// 提示：

// 1 <= S.length <= 1000
// S 只包含字符 "I" 或 "D"。

/**
 * @param {string} S
 * @return {number[]}
 */
// var diStringMatch = function (S) {
//     let arr = Array(S.length + 1).fill(null).map((v, i) => i);
//     let strArr = S.split("");
//     for (let i = 0; i < strArr.length; i++) {
//         for (let j = 0; j < strArr.length; j++) {
//             if (strArr[j] === "I") {
//                 if (arr[j] > arr[j + 1]) {
//                     let tmp = arr[j];
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = tmp
//                 }
//             } else {
//                 if (arr[j] < arr[j + 1]) {
//                     let tmp = arr[j];
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = tmp
//                 }
//             }
//         }

//     }
//     return arr;
// };
// diStringMatch("DDI")
// 题解
// 1、填充数组0-S.lenght
// 2、双重循环，判断是否符合题目条件，如果不符合题目条件，进行交换
// 3、此方法时间复杂度较高
// 4、有更优解法

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
    let arr = [];
    let strArr = S.split("");
    let s = 0,
        m = strArr.length;
    strArr.forEach((item, index) => {
        if (item === "I") {
            arr.push(s++);
        } else {
            arr.push(m--)
        }
    })
    strArr[strArr.length - 1] === "I" ? arr.push(m) : arr.push(s);
    return arr;
};
diStringMatch("DDI")