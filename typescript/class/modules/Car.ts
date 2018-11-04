import Vehicle from './Vehicle'

export default class Car extends Vehicle{
    private numberDoors: number

    constructor(model: string, numberDoors: number){
        super();
        this.model = model
        this.numberDoors = numberDoors
    }
}