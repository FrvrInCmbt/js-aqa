import { Book } from "./Book.mjs";
import { EBook } from "./EBook.mjs"

let book = new Book("It" , "Stephen King", 1986);
let book1 = new Book("Shining", "Stephen King", 1977);
let book2 = new Book("Lord of the Rings", "J. R. Tolkin", 1954);

let ebook = new EBook("Harry Potter and Sorcerrers Stone", "J.K. Rowling", 1990, "PDF");
let ebook1 = new EBook("Harry Potter and Secret Chamber", "J.K. Rowling", 1991, "TXT");
let ebook2 = new EBook("Harry Potter and Prisoner of Azkaban", "J.K. Rowling", 1993, "WORD");

book.printInfo();
book1.printInfo();
book2.printInfo();

ebook.printInfo();
ebook1.printInfo();
ebook2.printInfo();


let oldBook = Book.printOldestBook([book, book1, book2, ebook, ebook1, ebook2]);
console.log(oldBook);

const ebook3 = EBook.ebookGenerator(book2, "PDF")
console.log(ebook3);
ebook3.printInfo();

//validations check
//book1.title = "Diary of Jane";
//book1.author = "Abc";
//book1.release = 1990;
//ebook2.format = 123;
//ebook2.title = 1;




