class Book {
    constructor(title, author, genre, status = "available") {
        this._title = title;
        this.author = author;
        this._genre = genre;
        this.status = status;
    }

    get title() {
        return this._title;
    }

    set genre(newGenre) {
        if (newGenre) {
            this._genre = newGenre;
        } else {
            console.log("Invalid genre name");
        }
    }
}

class LibraryManagement {
    constructor() {
        this.libraryManager = [];
    }

    addBook(title, author, genre) {
        const newBook = new Book(title, author, genre);
        this.libraryManager.push(newBook); //add book to library
        console.log(`Book "${title}" added to the library`);
    }

    deleteBook(title) {
        const bookIndex = this.libraryManager.findIndex(book => book.title === title);
        if (bookIndex !== -1) {
            this.libraryManager.splice(bookIndex, 1);
            console.log(`Book "${title}" deleted from the library`);
        } else {
            console.log(`Book "${title}" not found in the library`)
        }
    }

    showBooks() {
        if (this.libraryManager.length === 0) {
            console.log("No books in the library");
        } else {
            console.log("Books in the library:");
            this.libraryManager.forEach(book => {
                console.log(
                    `Title: "${book.title}", Author: "${book.author}", Genre: "${book.genre}", Status: "${book.status}"`
                );
            });
        }
    }
}

const library = new LibraryManagement("City Library");

// Добавление книг
library.addBook("1984", "George Orwell", "Dystopian");
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic");

// Отображение книг
library.showBooks();

// Удаление книги
library.deleteBook("1984");
library.showBooks();