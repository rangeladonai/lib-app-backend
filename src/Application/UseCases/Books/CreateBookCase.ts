import { BookDTO } from "../../../Adapters/DTO/BookDTO";
import IBookRepository from "../../../Domain/Interfaces/IBookRepository";

export default class CreateBookCase {
  constructor(private bookRepository: IBookRepository) {}

  execute(bookDTO: BookDTO): void {
    return this.bookRepository.create(bookDTO.title, bookDTO.author);
  }
}
