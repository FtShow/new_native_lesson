class ClassCar {
    constructor(brand, maxSpeed) {
        this.brand = brand
        this.maxSpeed = maxSpeed
        this.s = {}

    }
    startEngine() {
        console.log(`Start ${this.brand}`)
    }
    stopEngine = () => {
        console.log(`Stop ${this.brand}`)
    }
}

let car1 = new ClassCar('bmw', 200)
let car2 = new ClassCar('tesla', 300)


// console.log(car1.s === car2.s)
// console.log(car1)


//console.log(car1.__proto__ === ClassCar.prototype)


//console.log(arr.__proto__ === arr2.__proto__)


let st2r = 'str'
let n = 32

//console.log(st2r)

let a = st2r.__proto__.constructor
console.log(car1.__proto__.constructor === ClassCar.prototype)
console.dir(Function.prototype.__proto__ === Object.prototype)
console.dir( Object.prototype.__proto__)
// console.log(car1.__proto__.__proto__ === null)
//console.log(Array.from(str).join('') === st2r)


