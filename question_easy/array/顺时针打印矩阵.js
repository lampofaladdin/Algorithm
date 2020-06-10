// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

//

// 示例 1：

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
//

// 限制：

// 0 <= matrix.length <= 100
// 0 <= matrix[i].length <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let top = 0,
    left = 0,
    bottom = matrix.length - 1,
    right = matrix[0].length - 1;
  let size = matrix.length * matrix[0].length;
  const res = [];
  while (res.length !== size) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    if (res.length === size) {
      break;
    }
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};
console.log(
  spiralOrder([
    [2, 5, 8],
    [4, 0, -1],
  ])
);

// [1, 2, 3, 6, 9, 8, 7, 4, 5];

// matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
//  00 01 02 12 22 21 20 10 11
