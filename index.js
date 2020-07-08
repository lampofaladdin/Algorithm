// require('./question/删除最外层的括号')
// require('./question/IP 地址无效化');
// require('./question_easy/唯一摩尔斯密码词');
// // require('./question_easy/翻转图像');
// require('./question_easy/机器人能否返回原点');
// require('./question_easy/汉明距离');
// require('./question_easy/有序数组的平方');
// require('./question_easy/高度检查器');
// require('./question_easy/增减字符串匹配');
// require('./question_easy/自除数');
// require('./question_easy/Nim游戏');
// require('./question_easy/山脉数组的峰顶索引');
// require('./question_easy/数字的补数');
// require('./question_easy/按奇偶排序数组');
// require('./question_easy/删列造序');
// require('./question_easy/除数博弈');
// require('./question_easy/反转字符串');
// require('./question_easy/array/棒球比赛');
// require('./question_easy/array/二分查找');
// require('./question_easy/array/子域名访问计数');
// require('./question_easy/array/键盘行');
// require('./question_easy/array/反转字符串中的单词');
// require('./question_easy/array/两个数组的交集');
// require('./question_easy/function/Excel表列序号');
// require('./question_easy/array/按奇偶排序数组2');
// require('./question_easy/function/各位相加');
// require('./question_easy/function/回文数');
// require('./question_medium/括号生成');
// require('./question_medium/两数相加 II');
// require('./question_medium/矩阵');
// require('./question_medium/跳跃游戏');
// require('./question_easy/array/拥有最多糖果的孩子');
// require('./question_medium/求和');
// require('./question_medium/新21点');
// require('./question_medium/除自身以外数组的乘积');
// require("./question_easy/array/顺时针打印矩阵");
// require("./question_easy/dp/连续子数组的最大和");
// require("./question_easy/dp/判断子序列");
// require("./question_medium/有序矩阵中第K小的元素");

var duck = {
  duckSinging: function () {
    console.log("嘎嘎嘎");
  },
};

var chicken = {
  duckSinging: function () {
    console.log("嘎嘎嘎");
  },
};

var choir = [];

let joinChoir = (animal) => {
  if (animal && typeof animal.duckSinging === "function") {
    choir.push(animal);
    console.log("恭喜加入合唱团");
    console.log(`合唱团成员数量${choir.length}`);
  }
};

joinChoir(duck);
joinChoir(chicken);

