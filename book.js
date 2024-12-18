class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    getInfo() {
        return `Title: ${this.title}, Author: ${this.author}, Price: $${this.price}`;
    }
    updatePrice(newPrice) {
        if (newPrice > 0) {
            this.price = newPrice;
        } else {
            console.log("Error: Price must be positive!");
        }
    }
}

//создаем экземплар класса
const book1 = new Book('1984', 'George Orwell', 9.99);
console.log(book1.getInfo());

const book2 = new Book("Brave New World", "Aldous Huxley", 15.99);
console.log(book2.getInfo());
book2.updatePrice(14.86);
console.log(book2.getInfo());
book2.updatePrice(-5);
console.log(book2.getInfo());
book2.updatePrice(0);
console.log(book2.getInfo());