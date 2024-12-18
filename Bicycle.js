import Transport from "./transport.js";

class Bicycle extends Transport {
    constructor(name, speed, maxSpeed, gearCount) {
        super(name, speed, maxSpeed)
        this.gearCount = gearCount;
    }

    start() {
        if(this._speed > 0) {
            console.log(`${this.name} with ${this.gearCount} started moving`)
        } else {
            console.log(`${this.name} with ${this.gearCount} is standing`)
        }
    }
}

const myBicycle = new Bicycle("Trek Rail", 40, 60, 7);
myBicycle.start();