// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


// 示例 1:

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
// 示例 2:

// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (target == nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 3));

// 题解
// 有序数组，查找中间的值，判断中间的值大于还是小于目标值，如果小于，在折半目标数组的内容，直到查找到目标值，或者开始值小于等于结尾值
// 初始化start = 0, end = nums.length - 1;
// 中间值mid为start + (end - start) / 2， 这种比较合理， 我使用的方法是(start + end) / 2， 其实也可以， 但是不是最佳实践
// 循环当start <= end的时候 循环结束
// 当目标值target 等于 nums[mid] 的值的时候， 返回的mid值就为结果
// 如果target大于nums[i]， 说明要查找的值在左边， start的值就变成 mid + 1，
// 如果target小于nums[i]， 说明要查找的值在右边， end的值就变成 mid - 1
// 如果循环结束没有找到查找值，返回-1

// 二分查找应用于有序数组