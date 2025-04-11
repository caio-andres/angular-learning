export interface Book {
  title: string;
  author: string;
  favorite: boolean;
  genre: LiteraryGenre;
  image: string;
}

export interface LiteraryGenre {
  id: string;
  value: string;
  books: Book[];
}
