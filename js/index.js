import User from '../modules/User.js';
import BookRepository from '../modules/BookRepository.js';
import BookListView from '../modules/BookListView.js';
import { DateTime } from '../modules/luxon.js';

const user = new User('Paul', 1);
const userRepository = new BookRepository(user, 'default');
let bookListView;

document.getElementById('form').addEventListener('submit', () => {
  const newBook = userRepository.add(document.getElementById('title').value,
    document.getElementById('author').value);
  bookListView.addBook(newBook);
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  bookListView = new BookListView(userRepository,
    document.getElementById('main-cont'),
    document.getElementById('form-cont'));
  bookListView.show();
});

document.getElementById('list-link').addEventListener('click', () => {
  document.getElementById('book-cont').classList.remove('hidden');
  document.getElementById('form').classList.add('hidden');
  document.getElementById('contact').classList.add('hidden');
});

document.getElementById('add-link').addEventListener('click', () => {
  document.getElementById('book-cont').classList.add('hidden');
  document.getElementById('form').classList.remove('hidden');
  document.getElementById('contact').classList.add('hidden');
});

document.getElementById('contact-link').addEventListener('click', () => {
  document.getElementById('book-cont').classList.add('hidden');
  document.getElementById('form').classList.add('hidden');
  document.getElementById('contact').classList.remove('hidden');
});

setInterval(() => {
  document.getElementById('date').textContent = DateTime.now().toFormat('LLL dd yyyy, TT');
}, 1000);
