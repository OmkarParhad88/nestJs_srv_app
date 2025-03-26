import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  addBook(): string {
    return 'this wiill add book ';
  }

  updateBook(): string {
    return 'this will update book ';
  }

  findbook(): string {
    return 'this will find all book';
  }
}
