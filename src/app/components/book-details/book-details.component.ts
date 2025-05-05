import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-details',
  standalone: true,
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  @Input() book?: Book;
  @Input() show = false;
  @Input() onClose: () => void = () => {};
}