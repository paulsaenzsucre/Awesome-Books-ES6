import Book from './Book.js';
import BookStorage from './BookStorage.js';

class BookRepository {
  #books;

  #storage;

  #user;

  constructor(user, storage) {
    this.#storage = new BookStorage(user, storage);
    this.#books = this.#storage.load();
    this.#user = user;
  }

  add = (title, author) => {
    const book = new Book(this.#newId(), title, author);
    this.#books.push(book);
    this.#storage.save(this.#books);
    return book;
  }

  remove = (book) => {
    const newArray = this.#books.filter((element) => book !== element);
    this.#books = newArray;
    this.#storage.save(this.#books);
  }

  allBooks = () => this.#books

  #newId = () => (this.#books.length > 0
    ? this.#books[this.#books.length - 1].id + 1
    : 0)
}

export default BookRepository;