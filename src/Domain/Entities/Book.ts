export default class Book {
  private id: string;
  private title: string;
  private author: string;

  constructor(id: string, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }
}
