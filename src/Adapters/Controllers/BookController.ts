import { Request, Response } from "express";
import BookRepository from "../../Infra/Repositories/BookRepository";
import CreateBookCase from "../../Application/UseCases/Books/CreateBookCase";
import GetBooksCase from "../../Application/UseCases/Books/GetBooksCase";

export default class BookController {
  public async getBooks(req: Request, res: Response): Promise<void> {
    const bookRepository = new BookRepository();
    const getBooksCase = new GetBooksCase(bookRepository);
    const books = await getBooksCase.execute();
    res.status(201).send({ books });
  }

  public createBook(req: Request, res: Response): void {
    const bookDTO = req.body;
    const bookRepository = new BookRepository();
    const createBookCase = new CreateBookCase(bookRepository);
    createBookCase.execute(bookDTO);
    res
      .status(201)
      .send({ message: "✅ Book created successfully", book: bookDTO });
  }
}
