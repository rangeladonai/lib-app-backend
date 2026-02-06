import { Request, Response } from "express";
import BookController from "../src/Adapters/Controllers/BookController";
import BookRepository from "../src/Infra/Repositories/BookRepository";
import CreateBookCase from "../src/Application/UseCases/Books/CreateBookCase";

jest.mock("../src/Infra/Repositories/BookRepository");
jest.mock("../src/Application/UseCases/Books/CreateBookCase");

describe("BookController", () => {
  let bookController: BookController;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    bookController = new BookController();
    mockRequest = {
      body: { title: "Test Book", author: "Test Author" }
    };
    mockResponse = {
      send: jest.fn()
    };
  });

  it("should create a book successfully", () => {
    bookController.createBook(mockRequest as Request, mockResponse as Response);
    expect(CreateBookCase).toHaveBeenCalled();
  });
});