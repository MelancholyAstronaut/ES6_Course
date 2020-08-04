// 基本箭头函数 , 无参数
// let hello = () => {
//     console.log("say hello")
// }
// hello()

// let hello =(name)=>{   //有且仅有一个参数时, 可以省略括号  即   let hello=name = 也可以
//     console.log(`你好 ${name}`);  //输出 : 你好 rookie
// }
// hello("rookie")

// let pow = x => x * x;  如果返回值是表达式可以省略 return 和 {}
// console.log(pow(10));
// 总结
//
// 1、箭头函数中this指向定义时所在的对象，而不是调用时所在的对象
//
// 2、箭头函数不可以当作构造函数
//
// 3、箭头函数不可以使用arguments对象

// 实例 : 箭头函数的数组排序问题?

var arr = Array.of(7, 5, 4, 3, 8, 9, 0, 1, 324, 34, 6, 78);
arr.sort((x, y) => {
        return y-x;  //return x-y =>从小到大
    }
)
console.log(arr)