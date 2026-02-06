import IBookRepository from "../../Domain/Interfaces/IBookRepository";
import BookDAO from "../DAO/BookDAO";
export default class BookRepository implements IBookRepository {
  create(title: string, author: string): void {
    if (!title || !author) {
      throw new Error("Title and Author are required");
    }
    const bookDAO = new BookDAO();
    bookDAO.insert(title, author);
  }

  async findAll(): Promise<any[]> {
    const bookDAO = new BookDAO();
    return await bookDAO.findAll();
  }
}
