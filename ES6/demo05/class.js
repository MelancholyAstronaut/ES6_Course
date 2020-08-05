class Animal {
    constructor(type) {
        this._type = type;
    }
    walk(name){
        console.log(`${name} 可以走路`)
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }
}
let dog = new Animal("dog");
dog.walk()
//下面都和java一样了