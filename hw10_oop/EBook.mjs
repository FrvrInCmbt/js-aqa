import { Book } from "./Book.mjs";
export{EBook}

class EBook extends Book {
    constructor(title, author, release, format){
        super(title, author, release)
        this._format = format
    }

    get title() {
        return this._title
    }

    set title(title){
        if(typeof title !== "string") throw new Error ("Title should be a string, not a number");
        this._title = title
    }

    get author() {
        return this._author
    }

    set author(author){
        if(typeof author !== "string") throw new Error ("Author name should contains string");
        if(author.length < 3) throw new Error ("Author name should contains more than 2 symbols");
        this._author = author
    }

    get release() {
        return this._release
    }

    set release(release){
        if(typeof release !== "number") throw new Error ("Release must contains a number");
        this._release = release
    }

    get format() {
        return this._format
    }

    set format(format) {
        if(typeof format !== "string") throw new Error ("Format should contains string");
        return this._format = format
    }

    printInfo(){
        console.log(`General info about book "${this._title}" , author is ${this._author} , date of release: ${this._release}, and format is ${this._format}`)
    }

    static ebookGenerator(book, format) {
        if(book instanceof Book) {
            return new EBook (book.title, book.author, book.release, format);
        }
    }
}