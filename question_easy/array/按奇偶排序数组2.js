// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

// 你可以返回任何满足上述条件的数组作为答案。

//  

// 示例：

// 输入：[4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
//  

// 提示：

// 2 <= A.length <= 20000
// A.length % 2 == 0
// 0 <= A[i] <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sort-array-by-parity-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let arr = [];
    let len = A.length;
    for (let i = 0; i < len; i += 2) {
        for (let j = 0; j < len; j++) {
            if (A[j] % 2 == 0) {
                arr[i] = A.splice(j, 1)[0];
                break;
            }
        }
    }
    for (let i = 1; i < len; i += 2) {
        for (let j = 0; j < len; j++) {
            if (A[j] % 2 == 1) {
                arr[i] = A.splice(j, 1)[0];
                break;
            }
        }
    }
    return arr;

};

console.log(sortArrayByParityII([4, 2, 5, 7]));

// 题解
// 当为基数的时候，将数组内的奇数截取出来
// 当为偶数的时候，讲数组内的偶数截取出来
// 最后退出

/**
 * 最优解法
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let i = 0, j = A.length - 1
    while (i < A.length) {
        if (A[i] % 2 === i % 2) {
            i = i + 2
        } else {
            while (A[j] % 2 === j % 2) {
                j = j - 2
                continue
            }
            let tmp = A[i]
            A[i] = A[j]
            A[j] = tmp
            i = i + 2
        }
    }
    return A
};

// 打扰了。