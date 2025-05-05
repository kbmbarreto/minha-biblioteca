import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BookFormComponent {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    year: new Date().getFullYear(),
    publishingCompany: '',
    isReaded: false,
    isDigital: false,
    isDeleted: false,
    cover: '',
    updatedDate: new Date().toISOString()  // <- Agora é string
  };

  constructor(
      private bookService: BookService,
      private router: Router
  ) {}

  saveBook() {
    this.bookService.create(this.book).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erro ao salvar livro:', err);
      }
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}