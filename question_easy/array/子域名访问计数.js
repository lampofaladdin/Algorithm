// 一个网站域名，如"discuss.leetcode.com"，包含了多个子域名。作为顶级域名，常用的有"com"，下一级则有"leetcode.com"，最低的一级为"discuss.leetcode.com"。当我们访问域名"discuss.leetcode.com"时，也同时访问了其父域名"leetcode.com"以及顶级域名 "com"。

// 给定一个带访问次数和域名的组合，要求分别计算每个域名被访问的次数。其格式为访问次数+空格+地址，例如："9001 discuss.leetcode.com"。

// 接下来会给出一组访问次数和域名组合的列表cpdomains 。要求解析出所有域名的访问次数，输出格式和输入格式相同，不限定先后顺序。

// 示例 1:
// 输入: 
// ["9001 discuss.leetcode.com"]
// 输出: 
// ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
// 说明: 
// 例子中仅包含一个网站域名："discuss.leetcode.com"。按照前文假设，子域名"leetcode.com"和"com"都会被访问，所以它们都被访问了9001次。
// 示例 2
// 输入: 
// ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
// 输出: 
// ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
// 说明: 
// 按照假设，会访问"google.mail.com" 900次，"yahoo.com" 50次，"intel.mail.com" 1次，"wiki.org" 5次。
// 而对于父域名，会访问"mail.com" 900+1 = 901次，"com" 900 + 50 + 1 = 951次，和 "org" 5 次。
// 注意事项：

//  cpdomains 的长度小于 100。
// 每个域名的长度小于100。
// 每个域名地址包含一个或两个"."符号。

/**
 * 自己解法
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let obj = {};
    let result = [];
    cpdomains.forEach(item => {
        let itemArr = item.split(" ");
        let count = +itemArr[0]
        obj[itemArr[1]] = (obj[itemArr[1]] || 0) + count;
        itemArr[1].split(".").reduceRight((a, b) => {
            obj[a] = (obj[a] || 0) + count;
            return (b + "." + a)
        })
    });

    for (let key in obj) {
        result.push(obj[key] + " " + key);
    }
    return result;
};

subdomainVisits(["9001 discuss.leetcode.com", "901 mail.com"])

//题解
// 循环cpdomains， 得到每个链接访问的数据，
// 分割数据， 得到访问次数和URL，
// 对URL进行分割， 然后reduceRight拼接字符串， 得到顶级域名， 次级域名， 二级域名对应的内容，
// 然后用obj[a] = (obj[a] || 0) + count的方式来统计点击的数量，(obj[a]||0)判断是否这个有值，如果有就加等count，如果没有就0+count
// 循环完毕后，得到一个obj对象，obj的key为url，obj[key]为对应的统计数量
// 讲对象转换为数组

/**
 * 最优解法
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let hash = {}
    cpdomains.forEach(c => {
        let [n, url] = c.split(' ');
        n = Number(n)
        hash[url] = hash[url] ? hash[url] + n : n
        let offset = 0
        while (url.indexOf('.', offset) !== -1) {
            offset = url.indexOf('.', offset) + 1
            hash[url.slice(offset)] = hash[url.slice(offset)] ? hash[url.slice(offset)] + n : n
        }
    })
    return Object.keys(hash).map(url => {
        return `${hash[url]} ${url}`
    })
};

//思路一样，细节实现不一样。
//   我使用reduceRight来拼接字符串，本解使用indexOf查找来实现，不确定哪个效率更高
//   最后对象转数组的实现方式效率基本相同，但是我多定义了一个变量。