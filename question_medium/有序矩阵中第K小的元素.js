// 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
// 请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。

//

// 示例：

// matrix = [
//    [ 1,  5,  9],
//    [10, 11, 13],
//    [12, 13, 15]
// ],
// k = 8,

// 返回 13。
//

// 提示：
// 你可以假设 k 的值永远是有效的，1 ≤ k ≤ n2 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// /**
//  * @param {number[][]} matrix
//  * @param {number} k
//  * @return {number}
//  */
// var kthSmallest = function (matrix, k) {
//   let arr = [];
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       arr.push(matrix[i][j]);
//     }
//   }
//   arr = arr.sort((a, b) => a - b);
//   console.log(arr[k - 1]);
//   return arr[k - 1];
// };

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let n = matrix.length * 2 - 1;
  let times = 0;
  while (times === n) {
    console.log(times);
    times++;
  }
};

let matrix = [
    [1, 5, 9],
    [10, 11, 14],
    [12, 13, 15],
  ],
  k = 8;

kthSmallest(matrix, k);
