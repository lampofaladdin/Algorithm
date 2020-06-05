// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

//

// 示例:

// 输入: [1,2,3,4]
// 输出: [24,12,8,6]
//

// 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。

// 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

// 进阶：
// 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/product-of-array-except-self
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let leftArr = [1];
  let rightArr = [1];
  let answer = [];
  for (let i = 0; i < nums.length - 1; i++) {
    leftArr.push(leftArr[i] * nums[i]);
  }
  for (let i = nums.length - 1; i > 0; i--) {
    rightArr.unshift(rightArr[0] * nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    answer.push(leftArr[i] * rightArr[i]);
  }
  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
// 题解
// 左右乘积数
