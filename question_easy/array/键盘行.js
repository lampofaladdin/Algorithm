// 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let keyMap = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    return words.filter(item => {
        return keyMap.some(key => {
            return item.toLowerCase().split("").every(childItem => {
                return key.includes(childItem);
            })
        })

    })

};

findWords(["Hello", "Alaska", "Dad", "Peace"]);

// 题解
// 定义keyMap行数组
// 过滤words数组,得到每个单词,返回值如果为true代表是对的
// filter的返回值为一个some断言，some断言循环keyMap值，只要有其中一个key能包含words中所有的内容，就返回true
// some断言的返回值为一个every，必须所有的字母都能在key中找到才返回true，不然返回false

// 缺点：循环次数过多，其中一个key只要满足，另外两个Key可以不用循环判断
// 优点：如果好看也算的话。。。

/**
 * 最优解决方案
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let ls = [/^((Q|q)|(W|w)|(E|e)|(R|r)|(T|t)|(Y|y)|(U|u)|(I|i)|(O|o)|(P|p))+$/,
            /^((A|a)|(S|s)|(D|d)|(F|f)|(G|g)|(H|h)|(J|j)|(K|k)|(L|l))+$/,
            /^((Z|z)|(X|x)|(C|c)|(V|v)|(B|b)|(N|n)|(M|m))+$/
        ],
        cache = [];
    for (let i = 0; i < words.length; ++i) {
        for (let j = 0; j < ls.length; ++j) {
            if (ls[j].test(words[i])) {
                cache.push(words[i]);
            }
        }
    }
    return cache;
};

// 题解
// 正则判断，效率最高的方法
// 写出来正则（卧槽 该怎么写？？？？？），循环匹配，匹配成功push到缓存数组内，