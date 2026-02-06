import IBookDAO from "../../Domain/Interfaces/IBookDAO";
import Database from "../Dependencies/Database";

export default class BookDAO implements IBookDAO {
  private database: Database;
  constructor() {
    this.database = Database.getInstance();
  }
  insert(title: string, author: string): void {
    const sql = `INSERT INTO book (title, author) VALUES ('${title}', '${author}')`;
    this.database.run(sql);
  }
  update(id: number, title: string, author: string): void {
    throw new Error("Method not implemented.");
  }
  delete(id: number): void {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<any[]> {
    const sql = "SELECT * FROM book";
    const result = await this.database.run(sql);
    console.log(result[0]);
    return result[0] || [];
  }
}
