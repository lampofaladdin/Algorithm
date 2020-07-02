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

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let n = matrix.length;
  let time = 0;
  let count = 0;

  while (true) {
    time++;
    count += time;
    if (count + time + 1 > k) {
      break;
    }
  }
  console.log(time, count);
  //   for (let i = 0; i < time; i++) {
  //     if (i >= n || time - i >= n) {
  //       continue;
  //     }
  //     console.log(matrix[i][time - i], matrix[time - i][i], k, count);
  //     if (matrix[i][time - i] > matrix[time - i][i]) {
  //       if (i === k - count - 1) {
  //         return matrix[i][time - i];
  //       }
  //     } else {
  //       if (i === k - count - 1) {
  //         return matrix[time - i][i];
  //       }
  //     }
  //   }
  return matrix[0][0];
};

// 3 * 3

// // 00 0
// // 01 10 1
// // 02 11 20 2
// // 12 21 3
// // 22 4

// n * 2 - 1

// 12 21  8 7

// 1 +2 +3 + 4

let matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  k = 2;

kthSmallest(matrix, k);
