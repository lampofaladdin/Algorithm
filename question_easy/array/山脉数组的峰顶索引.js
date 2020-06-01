// 我们把符合下列属性的数组 A 称作山脉：

// A.length >= 3
// 存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// 给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。

//  

// 示例 1：

// 输入：[0,1,0]
// 输出：1
// 示例 2：

// 输入：[0,2,1,0]
// 输出：1
//  

// 提示：

// 3 <= A.length <= 10000
// 0 <= A[i] <= 10^6
// A 是如上定义的山脉


/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
    let result = 0;
    var arr = A.reduce((a, b, i) => {
        if (a < b) {
            result = i;
            return b
        } else {
            return a;
        }
    });
    return result;
};

// peakIndexInMountainArray([4, 8, 3, 2, 0])

//题解
// 查找最大对应的index
// 因为是峰顶模式，循环的时候当前值大于下一个值的时候，返回当前的下标
// 可以考虑用折半查找，在数据比较多的时候，效率更高

var peakIndexInMountainArray = function (A) {
    let FirstMid = parseInt((A.length - 1) / 2);
    let mid = FirstMid;
    let i = mid;
    let j = 0;
    while (true) {
        j++;
        console.log(A[i], i, mid);
        if (j > 10) {
            break;
        }
        if (A[i] === 0) {
            break;
        } else if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            break;
        } else if (A[i - 1] > A[i]) {
            i = parseInt(mid / 2);
        } else {
            i = parseInt((mid + A.length) / 2);

        }
        mid = i;
    }

    return i
};
peakIndexInMountainArray([0, 1, 2, 5, 3, 2, 1, 0])