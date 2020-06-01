// 给定由 N 个小写字母字符串组成的数组 A，其中每个字符串长度相等。

// 删除 操作的定义是：选出一组要删掉的列，删去 A 中对应列中的所有字符，形式上，第 n 列为 [A[0][n], A[1][n], ..., A[A.length-1][n]]）。

// 比如，有 A = ["abcdef", "uvwxyz"]，



// 要删掉的列为 {0, 2, 3}，删除后 A 为["bef", "vyz"]， A 的列分别为["b","v"], ["e","y"], ["f","z"]。



// 你需要选出一组要删掉的列 D，对 A 执行删除操作，使 A 中剩余的每一列都是 非降序 排列的，然后请你返回 D.length 的最小可能值。

//  

// 示例 1：

// 输入：["cba", "daf", "ghi"]
// 输出：1
// 解释：
// 当选择 D = {1}，删除后 A 的列为：["c","d","g"] 和 ["a","f","i"]，均为非降序排列。
// 若选择 D = {}，那么 A 的列 ["b","a","h"] 就不是非降序排列了。
// 示例 2：

// 输入：["a", "b"]
// 输出：0
// 解释：D = {}
// 示例 3：

// 输入：["zyx", "wvu", "tsr"]
// 输出：3
// 解释：D = {0, 1, 2}
//  

// 提示：

// 1 <= A.length <= 100
// 1 <= A[i].length <= 1000


/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
    let count = 0;
    for (let i = 0; i < A[0].length; i++) {
        inner: for (let j = 0; j < A.length; j++) {
            if (j == A.length - 1) {
                break inner;;
            }
            if (A[j][i] > A[j + 1][i]) {
                count++;
                break inner;
            }
        }
    }
    return count;

};
minDeletionSize(["zyxa", "wvub", "tsrc"]);


//题解
// "zyxa"
// "wvub"
// "tsrc"

// 按题意应比较 zwt yvs xur abc的内容，
// 读取竖方向的内容，
// 所以外层循环应循环A[0] 的长度4次为i， 内层循环循环A的长度3次为j，
// 得到如下的二维数组，
// A[0][0] z A[1][0] w A[2][0] t
// A[0][1] y A[1][1] v A[2][1] s
// A[0][2] x A[1][2] u A[2][2] r
// A[0][3] a A[1][3] b A[2][3] c
// 比较A[j][i] 是否大于A[j + 1][i]
// 如果大于 说明不是降序数组，count自增， 跳出内层循环