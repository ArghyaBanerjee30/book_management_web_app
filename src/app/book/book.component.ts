import { Component } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})
export class BookComponent {
  title: string = '';
  author: string = '';
  bookList: Book[] = [];

  ngOnInit() {
    const savedBooks = localStorage.getItem('bookList');
    if(savedBooks) {
      this.bookList = JSON.parse(savedBooks);
    }
  }

  addBooks() {
    if (this.title && this.author) {
      this.bookList.push({
        id: Date.now(),
        title: this.title,
        author: this.author,
      });

      this.updateLocalStorage();

      this.title = '';
      this.author = '';
    }
  }

  deleteBook(id: number) {
    this.bookList = this.bookList.filter(book => book.id !== id);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }
}
