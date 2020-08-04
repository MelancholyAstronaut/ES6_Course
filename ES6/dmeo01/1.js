//变量的作用域 以及 新的变量声明关键字
function foo() {
    var a
    console.log(a)
    a = 5
}

foo() //undefined

function foo() {
    console.log(a)
    let a = 5
}

foo()

for (var i = 0; i < 3; i++) {
    console.log('循环内:' + i) // 0、1、2
}
console.log('循环外:' + i) // 3

for (let i = 0; i < 3 ;i++) {
    console.log('循环内:' + i) // 0、1、2
}
console.log('循环外:' + i) // ReferenceError: i is not defined

Object.defineProperty(window, 'PI', {
    value: 3.14,
    writable: false
})
console.log(PI)
PI = 5
console.log(PI)