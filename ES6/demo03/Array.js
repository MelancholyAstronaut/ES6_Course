const  ArrayUtils = require("./ArraysUtils")
//新的数组遍历
// [1, 2, 3, 4, 5].forEach(function (i) {
//     if (i === 2) {
//
//     } else {
//         console.log(i)
//     }
// }) 

// let sum = [1, 2, 3, 4, 5].reduce(function (a, b) {
//     return a + b;
// }, 0);
// console.log(sum);
//一些Array的新函数
// Array.from(arrayLike[, mapFn[, thisArg]])
// console.log(ArrayUtils.sum());
let c = Array.of(1,1,1,1,1).reduce(function (a,b,c,d){
    return a+b
})
console.log(c)