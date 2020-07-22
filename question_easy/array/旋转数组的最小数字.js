// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// /**
//  * @param {number[]} numbers
//  * @return {number}
//  */
// var minArray = function(numbers) {
//     return Math.min.apply(null,numbers)
// };


/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let target = 5;
    let left = 0;
    let right = numbers.length -1
    let mid = Math.floor((left + right)/2)
    while(left <= right){
        if(target > numbers[mid]){
            left = mid + 1
        }else if(target < numbers[mid]){
            right = mid - 1
        }else{
            return mid
        }
        mid = Math.floor((left + right)/2)
    }
    
    return -1
    
};


console.log(minArray([1,2,3,4,5,6]))