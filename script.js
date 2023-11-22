class Library {
    #books;

    constructor(initialBooks = []) {
        this.#books = [];
        initialBooks.forEach(book => this.addBook(book));
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.some(book => book.title === title)) {
            throw new Error(`Книга с названием "${title}" уже существует в библиотеке.`);
        }

        this.#books.push({ title });
    }

    removeBook(title) {
        const index = this.#books.findIndex(book => book.title === title);

        if (index === -1) {
            throw new Error(`Книга с названием "${title}" не найдена в библиотеке.`);
        }

        this.#books.splice(index, 1);
    }

    hasBook(title) {
        return this.#books.some(book => book.title === title);
    }
}

// Пример использования
const library = new Library([{ title: 'Book 1' }, { title: 'Book 2' }]);

console.log(library.allBooks);

library.addBook('Book 3');
console.log(library.allBooks);

library.removeBook('Book 1');
console.log(library.allBooks);

console.log(library.hasBook('Book 2')); // true
console.log(library.hasBook('Book 1')); // false
