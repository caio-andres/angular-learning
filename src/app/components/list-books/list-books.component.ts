import { Component, OnInit } from '@angular/core';
import { Book, LiteraryGenre } from '../book/book';
import { books } from '../../mock-books';

@Component({
  selector: 'app-list-books',
  imports: [],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css',
})
export class ListBooksComponent implements OnInit {
  genre: LiteraryGenre[] = [];
  bookPerGenre: Map<string, Book[]> = new Map();

  ngOnInit(): void {
    this.bookPerGenre = new Map();

    books.forEach((book) => {
      const genreId = book.genre.id;
      if (!this.bookPerGenre.has(genreId)) {
        this.bookPerGenre.set(genreId, []);
      }

      this.bookPerGenre.get(genreId)?.push(book);
    });

    this.genre = [
      {
          id: 'romance',
          value: "Romance",
          books: this.bookPerGenre.get("romance") ?? []
      },
      {
          id: 'misterio',
          value: 'Mistério',
          books: this.bookPerGenre.get("misterio") ?? []
      },
      {
          id: 'fantasia',
          value: 'Fantasia',
          books: this.bookPerGenre.get("fantasia") ?? []
      },
      {
          id: 'ficcao-cientifica',
          value: 'Ficção Científica',
          books: this.bookPerGenre.get("ficcao-cientifica") ?? []
      },
      {
          id: 'tecnicos',
          value: 'Técnicos',
          books: this.bookPerGenre.get("tecnicos") ?? []
      },
  ]

  console.log(this.genre)
  }
}
