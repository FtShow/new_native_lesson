const a = () =>{
    console.log(this)
}

a()

const car = {
    brand: 'bmw',
    showBrand: ()=>{
        console.log(this.brand)
    },
    showBrand2 () {
        console.log(this.brand)
    }
}
car.showBrand()
car.showBrand2()