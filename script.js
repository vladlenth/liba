const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.isRead = function() {
        if (this.read === true) {
        return "already read";
        } else {
        return "not read yet";
        }
    };
    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead()}.`;
        };
    };

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

myLibrary.forEach(Book => {
    console.log(Book.info());
});
