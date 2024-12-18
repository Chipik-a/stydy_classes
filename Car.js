import Transport from "./transport.js";

class Car extends Transport {
    constructor(name, speed, maxSpeed, fuelType) {
        super(name, speed, maxSpeed);
        this.fuelType = fuelType;
    }

    start() {
        if(this._speed > 0) {
            console.log(`${this.name} on ${this.fuelType} started moving`)
        } else {
            console.log(`${this.name} on ${this.fuelType} is standing`)
        }
    }
}

const myCar = new Car("Tesla Model S", 120, 250, "gasoline");
myCar.start();