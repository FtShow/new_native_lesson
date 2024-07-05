

function foo () {
    this.brand = 'bibika'
    const car = {
        brand: 'bmw',
        showBrand: () => {
            console.log(this.brand)
        },
        showBrand2() {
        }
    }
    car.showBrand()
    car.showBrand2()
}
var length = 4
function callback () {
    console.log(this.length)
}
const object = {
    length: 5,
    method(){
        arguments[0]()
    }
}
object.method(callback, 2, 6)
console.log(this.name)
console.log(this)


