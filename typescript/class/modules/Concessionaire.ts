import Car from './Car'
import ConcessioneireInterface from './ConcessioneireInterface'

export default class Concessionaire implements ConcessioneireInterface{
    private address: string
    private listCars: Array<Car>

    constructor(addres: string, listCars: Array<Car>){
        this.address = addres
        this.listCars = listCars
    }

    public listAllCars(): Array<Car>{
        return this.listCars
    }

    public getAddres(): string{
        return this.address
    }

    public getTimedWorke(): string {
        return "All days on week"
    }
}