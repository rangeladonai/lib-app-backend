import path from "path";
import mysql from "mysql2/promise";

export default class Database {
  private static instance: Database;
  private db: any;

  private constructor() {
    try {
      this.db = mysql.createPool({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "libapp",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
    } catch (error) {
      console.log("🚫 Can't connect database.");
      throw error;
    }
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getConnection(): any {
    return this.db;
  }

  // public runQuery(sql: string, params: any[] = []): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.db.run(sql, params, function (err) {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(this);
  //       }
  //     });
  //   });
  // }

  public async run(sql: string): Promise<any> {
    try {
      const result = await this.db.query(sql);
      return result;
    } catch (error) {
      console.error("Erro ao executar query:", error);
      throw error;
    }
  }
}
