export class Product {
    #id;
    #price;
    name;

    constructor(id, name, price) {
        this.#id = id;
        this.#price = price;
        this.name = name;
    }

    static createFromObject(obj) {
        return new Product(obj.id, obj.name, obj.price);
    }

    get id(){
        return this.#id;
    }

    get price(){
        return this.#price;
    }

    set price(value) {
        if(value > 0){
            this.#price = value;
        } else {
            console.log('Price must be greater than 0');
        }
    }
}