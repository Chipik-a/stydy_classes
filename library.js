class Library {
    constructor() {
        this.library = [];
    }

    addBook(title, author, year) {
        this.library.push({
            title, author, year, isLent: false, borrower: null, removed: false
        });
    }

    removeBook(title) {
        const book = this.library.find(book => book.title === title); //ищем книгу по названию
        if (book) {
            if (!book.removed) {
                book.removed = true; //пометить книгу как удаленную
                console.log(`Book "${title}" has been removed!`);
            } else {
                console.log(`Book "${title}" is already marked as removed.`);
            }
        } else {
                console.log(`Book "${title}" was not found.`);
            }
        }

        //полностью удалить книгу из массива

    removeBooks(title) {
        const initialLength = this.library.length; //запоминаем длину до удаления
        this.library = this.library.filter(book => book.title !== title); //фильтр книг
        if (this.library.length < initialLength) {
            console.log(`completely removed from the library!`);
        } else {
            console.log(`Library ${title} was not found.`);
        }
    }

    findBookByTitle(title) {
        const foundBook = this.library.find(book => book.title === title);
            if (foundBook) {
                console.log(foundBook);
            } else {
                console.log(`Book with title "${title}" not found.`);
        }
    }

    listAvailableBook(title) {
        const book = this.library.find(book => book.title === title);
        if(book) {
            if(!book.isLent) {
                book.isLent = true;
                book.borrower = "John Doe";
                console.log(`Book "${title}" has been lent to ${book.borrower}`);
            } else {
                console.log(`Book "${title}" is already lent to ${book.borrower}.`);
            }
        } else {
            console.log(`Book "${title}" was not found.`);
        }
    }

    checkIfLent(title) {
        const book = this.library.find(book => book.title === title);
        if(book) {
            if (book.isLent) {
                console.log(`Book "${title}" is already lent to ${book.borrower}`);
            } else {
                console.log(`Book "${title}" is available`);
            }
        } else {
                console.log(`Book "${title}" was not found`);
            }
        }

    showLibrary() {
        console.log(this.library);
    }
}

const library = new Library();
library.addBook("The Hobbit", "J.R.R. Tolkien", 2000);
library.addBook("1984", "George Orwell", 1900);
library.addBook("11111", "222222 and add some text", 2022);

library.showLibrary();

library.removeBook("The Hobbit");
library.showLibrary();

library.removeBooks("The Hobbit");
library.showLibrary();

library.findBookByTitle("1984")

library.addBook("test", "test", 2023);
library.addBook("test2", "test", 2024);

library.checkIfLent("1984");

library.listAvailableBook("1984");
