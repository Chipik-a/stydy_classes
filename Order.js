//create orders and control
export class Order {
    #id;
    #products = [];
    #customer;

        constructor(id, name) {
            this.#id = id;
            this.#customer = name;
        }
    get totalPrice(){
        return this.#products.reduce((sum, product) => sum + product.price, 0);
    }

    addProduct(product) { //добавление товара в заказ
            this.#products.push(product);
    }

    removeProduct(productId) {
            this.#products = this.#products.filter(product => product.id !== productId);
    }

    getOrderInfo() {
        return `Order ID: ${this.#id}, Customer: ${this.#customer}, Total: ${this.totalPrice}`;
    }
}