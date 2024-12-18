// class Product {
//     #id;
//     #price;
//     name;
//
//     constructor(id, name, price) {
//         this.#id = id;
//         this.#price = price;
//         this.name = name;
//     }
//     get id () {
//         return this.#id;
//     }
//     get price() {
//         return this.#price;
//     }
//
//     set price (value) {
//         if (value > 0) {
//             this.#price = value;
//         } else {
//             console.log ('Price should be more than 0');
//         }
//     }
//
//     getInfo() {
//         return(`Product: ${this.name}, ID: ${this.id}, Price: ${this.price}`);
//     }
// }
//
// const product = new Product('001', 'apple', 23);
// console.log(product.getInfo());
//
// product.id = '002'; // не измениться т к нет сеттера
//
// product.price = 123;
// console.log(product.price);
//
// product.price = -123;

//создать систему управления заказами для интернет-магазина. Каждый заказ включает информацию о клиенте, продуктах и общей сумме

import { Product } from "./Product.js";
import { Order } from "./Order.js";
import {Shop} from "./Shop.js";

// Create products
const apple = new Product(1, "Apple", 2)
const orange = Product.createFromObject({id: 2, name: "Orange", price: 3});

// Create order
const order1 = new Order(Shop.generateOrderId(), 'John Doe');
order1.addProduct(apple);
order1.addProduct(orange);
console.log(order1.getOrderInfo());

//create shop and order
const shop = new Shop();
shop.addOrder(apple);
