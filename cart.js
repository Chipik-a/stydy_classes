class Cart {
    constructor() {
        this.products = []; //массив для хранения продуктов
    }

   addProduct(product) {
        this.products.push(product);
    }

   removeProduct(productName) {
        this.products = this.products.filter(product => product.name !== productName);
   }

   getTotalPrice() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
   }

   showCart () {
       console.log("Your cart contains:");
       this.products.forEach(product => {
           console.log(`- ${product.name}: ${product.price}`);
       });
   }
}

const cart = new Cart();
cart.addProduct({ name: "Apple", price: 3});
cart.addProduct({ name: "Orange", price: 2});
cart.addProduct({ name: "Banana", price: 1});

cart.showCart();
console.log("Total price:", cart.getTotalPrice());

cart.removeProduct("Apple");
cart.showCart();
console.log("Total price:", cart.getTotalPrice());