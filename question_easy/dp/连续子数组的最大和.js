// 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。

//

// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
//

// 提示：

// 1 <= arr.length <= 10^5
// -100 <= arr[i] <= 100
// 注意：本题与主站 53 题相同：https://leetcode-cn.com/problems/maximum-subarray/

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] = nums[i] + nums[i - 1];
    }

    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// 动态规划

// dp[0] 等于 nums[0]
// 当dp[i-1] < 0的时候,说明加上dp[i-1]比直接等于nums[i]要小,所以dp[i] = nums[i]
// 当dp[i-1] >=0的时候,说明加上dp[i-1]的收益比较高,所以dp[i] 应等于nums[i] + dp[i-1]
// 因为nums数组可以扮演dp的角色,所以不再多建立数组
