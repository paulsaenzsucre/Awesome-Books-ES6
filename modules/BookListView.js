import BookView from './BookView.js';

class BookListView {
  #repository;

  #container;

  #before;

  #view;

  #list;

  constructor(repository, container, before) {
    this.#repository = repository;
    this.#container = container;
    this.#before = before;
    this.#view = this.#create();
  }

  #create = () => {
    const books = this.#repository.allBooks();
    let bookView;
    let element = document.createElement('h2');
    element.setAttribute('class', 'form-title');
    element.appendChild(document.createTextNode('Book List'));
    const section = document.createElement('section');
    section.setAttribute('id', 'book-cont');
    section.setAttribute('class', 'book-cont');
    section.addEventListener('removeBook', (evt) => {
      this.#repository.remove(evt.detail);
    });
    section.appendChild(element);
    const list = document.createElement('ul');
    list.setAttribute('class', 'book-list');

    if (this.#repository.allBooks().length > 0) {
      books.forEach((book) => {
        element = document.createElement('li');
        bookView = new BookView(book, element);
        bookView.show();
        list.appendChild(element);
      });
    }
    section.appendChild(list);
    this.#list = list;

    return section;
  }

  addBook = (book) => {
    const bookView = new BookView(book, this.#list);
    bookView.show();
  }

  remove = () => {
    this.#view.remove();
  }

  show = () => {
    this.#container.insertBefore(this.#view, this.#before);
  }
}

export default BookListView;