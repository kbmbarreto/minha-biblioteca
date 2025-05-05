import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, BookDetailsComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  search = '';
  selectedBook?: Book;
  showDetails = false;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks() {
    this.bookService.getAll().subscribe(data => this.books = data);
  }

  get filteredBooks() {
    return this.books.filter(book =>
        book.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  openDetails(book: Book) {
    this.selectedBook = book;
    this.showDetails = true;
  }

  closeDetails() {
    this.showDetails = false;
  }
}