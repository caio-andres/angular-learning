import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListBooksComponent } from './components/list-books/list-books.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ListBooksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'yoo';
}
