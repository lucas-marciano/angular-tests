import Vehicle from './Vehicle'

export default class Motocycle extends Vehicle{

    constructor(model: string){
        super()
        this.model = model
    }

    // @override
    public acelerate(): void{
        this.velocity = this.velocity + 20
    }
}