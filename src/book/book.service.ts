import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  //add book
  addBookService(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return "book is added.";
  }

  //update book
  updateBookService(book: Book): string {
    let index = this.books.findIndex(currentBook => {
      return currentBook.id === book.id;
    })
    this.books[index] = book;
    return "Book is updated successfully.";
  }

  //delete book
  deleteBookService(bookId: string): string {
    let index = this.books.findIndex(currentBook => {
      currentBook.id === bookId;
    })
    this.books.splice(index, 1);
    return "Book is deleted successfully.";
  }

  // find all books
  findAllBookService(): Book[] {
    return this.books;
  }

}