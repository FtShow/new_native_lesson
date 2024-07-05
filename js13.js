class ClassCar {
    #year

    constructor(brand, maxSpeed, year = 2000) {
        this.brand = brand
        this.#year = year
        this.maxSpeed = maxSpeed

    }

    get year (){
        return this.#year
    }
    set year (newYear){
        this.#year = newYear
    }
    static {
        this.prototype.secret = 'secret????';
    }

}
let car1 = new ClassCar('tesla', 300, 2020)
let car2 = new ClassCar('tesla', 300, 2020)

//console.log(car1.maxSpeed === car2.maxSpeed)
async function f (){
    return 1
}

console.log(f())