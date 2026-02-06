import IBookRepository from "../../../Domain/Interfaces/IBookRepository";

export default class GetBooksCase {
  constructor(private bookRepository: IBookRepository) {}
  execute(): Promise<any[]> {
    return this.bookRepository.findAll();
  }
}
