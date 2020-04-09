// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

//  

// 示例：

// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]

// 1 ()     1 
// 2 ()() (()) 2 
// 3 "((()))","(()())","(())()","()(())","()()()" 6 
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];
    //  cur :当前字符  left：当前字符左括号 right:当前字符右括号
    const help = (cur, left, right) => {
        console.log(cur,left,right)
      if (cur.length === 2 * n) {
        res.push(cur);
        return;
      }
      if (left < n) {
        help(cur + "(", left + 1, right)
      }
      if (right < left) {
        help(cur + ")", left, right + 1);
      }
    };
    help("", 0, 0);
    return res;
  };
console.log(generateParenthesis(3))

// 回溯法1
// 找到条件，不停的回溯到某一个阶段，然后进行递归。