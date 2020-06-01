// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

// 你可以按任意顺序返回答案。

//  

// 示例 1：

// 输入：["bella","label","roller"]
// 输出：["e","l","l"]
// 示例 2：

// 输入：["cool","lock","cook"]
// 输出：["c","o"]
//  

// 提示：

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] 是小写字母

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-common-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    let res = [];
    A[0].split("").forEach(code => {
        if (A.every((str, index) => {
                if (str.includes(code)) {
                    A[index] = str.replace(code, "");
                    return true;
                }
            })) {
            res.push(code);
        }
    })
    return res;
};

console.log(commonChars(["bella", "label", "roller"]))

// 题解
// A[0].split("").forEach() 即使在foreach中改变A,也一样会按照原来的string循环一遍，这与for(let i =0;i<A[0].length;i++)不同
// 用every方法，判断当前的string包不包括code值，如果包括，就替换掉（注1），并且return为true，
// 当数组内的所有字符串都包含这个code，every的方法为true;
// 如果为true，将字母push到res中，循环完毕，返回res

// 注1：这种输入内容 ["cool","lock","cook"]
// 循环cool，如果不替换内容，就会导致低下标为2的o也会匹配到内容，输出结果就为["c","o","o"]与预期结果不符