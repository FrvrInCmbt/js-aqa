let book = {
    title: "Carry",
    author: "Stephen King",
    releaseDate: 1974
};

let {title, author, ...rest} = book;
console.log(rest);

let book1 = {
    title: "Carry",
    author: "Stephen King",
    releaseDate: 1974
};

const {title: bookName, author: authorName} = book1;
console.log(`${bookName}, ${authorName}`);
