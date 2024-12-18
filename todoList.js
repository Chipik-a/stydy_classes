// class TodoList {
//     constructor() {
//         this.tasks = [];
//     }
//
//     addTask(taskName) {
//         this.tasks.push({name: taskName, completed: false});
//     }
//
//     completeTask(taskName) {
//         const task = this.tasks.find(task => task.name === taskName);
//         if (task) {
//             task.completed = true;
//         } else {
//             console.log(`Task "${taskName}" not found.`);
//         }
//     }
//
//     getAllTask() {
//         return this.tasks;
//     }
// }
//     const todo = new TodoList();
//     todo.addTask('task_1');
//     todo.addTask('task_2');
//     todo.addTask('task_3');
//
//     console.log("first list:", todo.getAllTask());
//
//     todo.completeTask('task_2');
// console.log('first task done', todo.getAllTask());
//
// todo.addTask('task_145');
// console.log('add new', todo.getAllTask());
//
// todo.completeTask('strange task');

class Books {
    constructor() {
        this.books = [];
    }

    addBook(bookTitle, year) {
        this.books.push({ title: bookTitle, year: year, removed: false });
    }

    removedBooks(bookTitle) {
        const book = this.books.find(book => book.title === bookTitle);
        if (book) {
            if (!book.removed) {
                book.removed = true;
                console.log(`Book "${bookTitle}" has been marked as removed.`);
            } else {
                console.log(`Book "${bookTitle}" is already marked as removed.`);
            }
        } else {
            console.log(`Book "${bookTitle}" was not found.`);
        }
    }

    showAllBooks(showRemoved = true) {
        return showRemoved ? this.books : this.books.filter(book => !book.removed);
    }

    deleteBook(bookTitle) {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.title !== bookTitle);
        if (this.books.length < initialLength) {
            console.log(`Book "${bookTitle}" has been deleted.`);
        } else {
            console.log(`Book "${bookTitle}" was not found.`);
        }
    }
}


const books = new Books();
books.addBook("name_1", 1890);
books.addBook("name_2", 2000);
books.addBook("name_3", 2005);

console.log("All books before marking any as removed:");
console.log(books.showAllBooks());

books.removedBooks("name_1");
console.log("All books after marking 'name_1' as removed:");
console.log(books.showAllBooks());

books.removedBooks("name_5");

console.log("All books without removed:");
console.log(books.showAllBooks(false));

books.deleteBook("name_2");
console.log("All books after deleting 'name_2':");
console.log(books.showAllBooks());


