import { Component } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  standalone: true,
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  book: Book = {
    title: '',
    author: '',
    year: new Date().getFullYear(),
    publishingCompany: '',
    isReaded: false,
    isDigital: false,
    cover: ''
  };

  constructor(private bookService: BookService, private router: Router) {}

  saveBook() {
    this.bookService.create(this.book).subscribe(() => {
      alert('Livro salvo com sucesso!');
      this.router.navigate(['/']);
    });
  }
}