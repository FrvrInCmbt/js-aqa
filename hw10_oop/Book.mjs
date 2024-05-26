export class Book {
    constructor(title, author, release){
        this._title = title;
        this._author = author;
        this._release = release;
    }

    get title() {
        return this._title
    }

    set title(title){
        if(typeof title !== "string") throw new Error("Title should be a string");
        this._title = title
    }

    get author() {
        return this._author
    }

    set author(author){
        if(typeof author !== "string") throw new Error("Author name should contains string");
        if(author.length < 3) {throw new Error("Author name should contains more than 2 symbols")};
        this._author = author
    }

    get release() {
        return this._release
    }

    set release(release){
        if(typeof release !== "number") throw new Error("Release must contains a number");
        this._release = release
    }

    printInfo(){
        console.log(`General info about book "${this._title}" , author is ${this._author} , date of release: ${this._release}`)
    }

    static printOldestBook(books){
        if(books.length > 0){
            const oldestBook = books.sort((a, b) => a.release - b.release)
            return oldestBook[0]
        }
    }
}
