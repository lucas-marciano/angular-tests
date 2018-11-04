export default class Vehicle {
    protected model: string = ""
    protected velocity: number = 0

    public acelerate(): void{
        this.velocity = this.velocity + 10
    }

    public stop(): void{
        this.velocity = 0
    }

    public velocityActual(): number{
        return this.velocity
    }
}