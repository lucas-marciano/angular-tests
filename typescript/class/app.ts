// Export modules
import Car from './modules/Car'
import Motocycle from './modules/Motocycle'
import Vehicle from './modules/Vehicle'
import Person from './modules/Person'
import Concessionaire from './modules/Concessionaire'
import Dao from '../interfaces/Dao'

// Makeit a list of cars
let carA = new Car("Car 1", 1)
let carB = new Car("Car 2", 2)
let carC = new Car("Car 3", 3)
let carD = new Car("Car 4", 4)

let listCars: Array<Car> = [carA, carB, carC, carD]

// Set the list of cars in Concessionaire
let concessionaire = new Concessionaire("Av Show", listCars)
//console.log(concessionaire.listAllCars())

// Buy a Car
let person = new Person("Jones", "Car 1")
//console.log(person.getFavorityCar())

// Check if the favority car ecxist in a Concessionaire list of cars
concessionaire.listAllCars().map((car: Car) => {
    if(car['model'] == person.getFavorityCar()){
        // Buy a fovority car
        person.buyCar(car)
    }
})

//console.log(person.getActualCar())


// Inheritance
let carE = new Car("Car E", 2)
let mot = new Motocycle("Honda")
mot.acelerate()
carE.acelerate()

console.log(carE, mot)

// Generics
let person4 = new Person("Person", "Car 9")
let car4 = new Car("car 4", 4)

let daoPerson = new Dao<Person>();
let daoCar = new Dao<Car>();

daoPerson.insert(person4)
daoCar.insert(car4)