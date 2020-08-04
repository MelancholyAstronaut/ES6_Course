//解构赋值
/* 旧的写法
let arr = [1, 2, 3]
let a = arr[0]
let b = arr[1]
let c = arr[2]a
 */

//新的写法
let z = [a,b,c] = [1, 2, 3]
// console.log(eval(z.join("+")))

let user = new Map()
user.set('name', 'John')
user.set('age', '30')

for (let [key, value] of user.entries()) {
    // console.log(`${key}:${value}`) // name:John, then age:30  ` `新的写法
}
let temp = [a,...rest] = [1,2,3,4,5,6]
// console.log(rest[0]) //可以用rest接受剩余的元素 , rest可以随便命名,但是一定要是最后一个

let options = {
    title: "Menu",
    width: 100,
    height: 200
}

let {title, width, height} = options //结构要完全一致

// console.log(title)  // Menu
// console.log(width)  // 100
// console.log(height) // 200