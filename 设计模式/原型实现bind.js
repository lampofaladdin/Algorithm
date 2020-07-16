// Function.prototype.bind = function (context) {
//   var self = this;
//   return function () {
//     return self.apply(context, arguments);
//   };
// };

// var obj = {
//   name: "sven",
// };

// var func = function () {}.bind(obj);
// func();

// // console.log([].shift.call([1, 2, 3]));
// console.log([].slice.call([1, 2, 3]));

// var Type = {};
// for (var i = 0, type; (type = ["String", "Array", "Number"][i++]); ) {
//   (function (type) {
//       console.log(type)
//     Type["is" + type] = function (obj) {
//       return Object.prototype.toString.call(obj) === "[object " + type + "]";
//     };
//   })(type);
// }
// console.log(Type)
// // Type.isArray([]); // 输出:true
// // console.log(Type.isArray([]))
// // Type.isString("str");
// // // 输出:true

// Number.prototype.add = function (num) {
//   return this + num;
// };

// Number.prototype.minus = function (num) {
//   return this - num;
// };

// console.log((5).add(3).minus(2));

const brace = require("brace");
console.log(brace)