// 学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。

// 请你返回至少有多少个学生没有站在正确位置数量。该人数指的是：能让所有学生以 非递减 高度排列的必要移动人数。

//  

// 示例：

// 输入：[1,1,4,2,1,3]
// 输出：3
// 解释：
// 高度为 4、3 和最后一个 1 的学生，没有站在正确的位置。

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let arr = new Array(...heights);
    return heights.sort((a, b) => a - b)
        .filter((item, index) => {
            return item != arr[index];
        }).length;
};

heightChecker([1, 1, 4, 2, 1, 3]);

// 题解
// 1、返回正确位置，相当于正序排列数组，然后找到两个数组不一样的地方，返回长度