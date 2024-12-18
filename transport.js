export default class Transport {
    constructor(name, speed, maxSpeed) {
        this.name = name; //public
        this._speed = speed; //private
        this._maxSpeed = maxSpeed; //read only
    }

    get maxSpeed() {
        return this._maxSpeed;
    }

    get speed() {
        return this._speed;
    }

    set speed(valueSpeed) {
       if(typeof valueSpeed !== "number") {
            console.log("Error: Speed must be a number")
            return;
        } if(valueSpeed < 0) {
               console.log("Error: Speed must be a positive integer")
               this._speed = 0;
           } else if (valueSpeed > this._maxSpeed) {
            console.log(`Warning: Speed cannot exceed ${this.maxSpeed}. Setting to maximum speed.`);
            this._speed =this._maxSpeed;
       } else {
           this._speed = valueSpeed;
        }
    }

    start() {
        if(this._speed > 0) {
            console.log(`${this.name} started moving`)
        } else {
            console.log(`${this.name} is standing`)
        }
    }

    stop() {
        if(this._speed <= 0) {
            console.log(`${this.name} stopped moving`)
        } else {
            console.log(`${this.name} is moving`)
        }
    }
}



const car = new Transport("Tesla Model S", 250, 360);

car.speed = -10
console.log(car.speed);
car.speed = 300
console.log(car.speed);
car.speed = 50;
console.log(car.speed);
car.speed = "word"
console.log(car.speed);
car.start()
car.speed = 0;
console.log(car.speed);
car.start()
car.stop()




