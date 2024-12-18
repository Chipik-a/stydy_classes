class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this._state = 100
        this.type = null
    }

    fix() {
        this.state *= 1.5
    }

    set state(newState) {
        if(typeof newState !== "number") {
            console.log("Error: State must be a number.");
            return;
        }
        this._state = Math.min(100, Math.max(0, newState));
        }

        /*
        * set state (number) {
        * if (number < 0) {this.state = 0}
        * if (number > 100) {this.state = 100}
        * else {this.state = number}
        * */
        get state() {//получение текущего состояния книги
            return this._state;
        }
    }

    class Magazine extends PrintEditionItem {
        constructor(author, name, releaseDate, pagesCount) {
            super (name, releaseDate, pagesCount)
            this.author = author
            this.type = 'magazine'
        }
    }

    class Book extends PrintEditionItem {
        constructor(author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount)
            this.author = author
            this.type = 'book'
    }
}
const book = new Book("J.K. Rowling", "Harry Potter", 1997, 320);
console.log(book.name); // "Harry Potter"
console.log(book.author); // "J.K. Rowling"
console.log(book.type); // "book"
console.log(book.state); // 100

book.state = 50; // Уменьшаем состояние
console.log(book.state); // 50

book.fix(); // Восстанавливаем издание
console.log(book.state); // 75 (50 * 1.5)

book.state = 200; // Пытаемся установить состояние больше 100
console.log(book.state); // 100 (сработал ограничитель)

book.state = -10; // Пытаемся установить состояние меньше 0
console.log(book.state); // 0 (сработал ограничитель)

const magazine = new Magazine("Jornal","National Geographic", 2024, 120);
console.log(magazine.name); // "National Geographic"
console.log(magazine.type);