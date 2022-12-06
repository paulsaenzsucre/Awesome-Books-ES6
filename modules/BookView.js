class BookView {
  #book;

  #container;

  #view;

  constructor(book, container) {
    this.#book = book;
    this.#container = container;
    this.#view = this.#create();
  }

  #create = () => {
    let element;
    const div = document.createElement('div');
    div.setAttribute('class', 'book-card');
    element = document.createElement('p');
    element.appendChild(document.createTextNode(this.#book.title));
    element.setAttribute('class', 'book-title');
    div.appendChild(element);
    element = document.createElement('p');
    element.appendChild(document.createTextNode(this.#book.author));
    element.setAttribute('class', 'book-author');
    div.appendChild(element);
    element = document.createElement('button');
    element.setAttribute('type', 'button');
    element.setAttribute('class', 'book-btn');
    element.appendChild(document.createTextNode('Remove'));
    element.addEventListener('click', () => {
      const removeBook = new CustomEvent('removeBook', {
        detail: this.#book,
        bubbles: true,
        cancelable: true,
        composed: true,
      });
      this.#view.dispatchEvent(removeBook);
      this.remove();
    });
    div.appendChild(element);
    element = document.createElement('hr');
    div.appendChild(element);
    const listItem = document.createElement('li');
    listItem.appendChild(div);
    return listItem;
  }

  remove = () => {
    this.#view.remove();
  }

  show = () => {
    this.#container.appendChild(this.#view);
  }
}

export default BookView;