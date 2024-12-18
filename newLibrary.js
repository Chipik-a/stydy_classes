// Класс "Книга"
class Book {
    // Конструктор
    constructor(title, author, genre, status = "available") {
        this._title = title; // Название книги (только для чтения)
        this.author = author; // Автор книги (публичное)
        this._genre = genre; // Жанр книги (приватное)
        this.status = status; // Статус книги (публичное)
    }

    // Геттер для названия книги (только чтение)
    get title() {
        return this._title;
    }

    // Геттер и сеттер для жанра (доступ через методы)
    get genre() {
        return this._genre; // Возвращаем приватный жанр
    }

    set genre(newGenre) {
        if (newGenre) {
            this._genre = newGenre; // Устанавливаем новый жанр
        } else {
            console.log("Invalid genre provided.");
        }
    }
}

// Класс "Управление библиотекой"
class LibraryManagement {
    constructor() {
        this.books = []; // Массив для хранения книг
    }

    // Добавление книги
    addBook(title, author, genre) {
        const book = new Book(title, author, genre); // Создаем объект книги
        this.books.push(book); // Добавляем книгу в массив
        console.log(`Book "${title}" added to the library.`);
    }

    // Отображение всех книг
    showBooks() {
        if (this.books.length === 0) {
            console.log("No books in the library.");
        } else {
            this.books.forEach((book, index) => {
                console.log(
                    `${index + 1}. Title: "${book.title}", Author: "${book.author}", Genre: "${book.genre}", Status: "${book.status}"`
                );
            });
        }
    }
}

// Использование
const library = new LibraryManagement(); // Создаем библиотеку

// Добавляем книги
library.addBook("Harry Potter", "J.K. Rowling", "Fantasy");
library.addBook("The Alchemist", "Paulo Coelho", "Philosophy");

// Показываем список книг
library.showBooks();

// Меняем жанр второй книги
library.books[1].genre = "Spirituality";
library.showBooks();
