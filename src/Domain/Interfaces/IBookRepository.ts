export default interface IBookRepository {
  create(title: string, author: string): void;
  findAll(): Promise<any>;
}
