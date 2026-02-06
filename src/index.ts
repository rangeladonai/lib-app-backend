import express from "express";
import dotenv from "dotenv";

import BookController from "./Adapters/Controllers/BookController";
import UserController from "./Adapters/Controllers/UserController";

dotenv.config();
const app = express();
const port = 3000;

// Middleware para parsear form-data e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Lib App API is running");
});

//#region Book Routes
const bookController = new BookController();
app.get("/books", (req, res) => bookController.getBooks(req, res));
app.post("/book", (req, res) => bookController.createBook(req, res));
//#endregion

//#region User Routes
const userController = new UserController();
app.post("/user", (req,res) => userController.createUser(req, res));
//#endregion

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
