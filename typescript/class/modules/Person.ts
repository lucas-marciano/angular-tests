import Car from './Car'

export default class Person {
    private name: string
    private favorityCar: String
    private actualCar: Car = new Car("", 0)

    constructor(name: string, favorityCar: String){
        this.name = name
        this.favorityCar = favorityCar
    }

    public sayName(): string{
        return this.name
    }

    public getFavorityCar(): String{
        return this.favorityCar
    }

    public getActualCar(): Car{
        return this.actualCar
    }

    public buyCar(car: Car): void {
        this.actualCar = car
    }
}