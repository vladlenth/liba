//liba
class Book {

    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    isRead() {
        if (this.read) {
            return "already read";
        } else {
            return "not read yet";
        }
    }

    info() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead()}.`;
    }
};


//liba and its methods
class Library {

    constructor() {
        this.books = [];
    }

    addBook(title, author, pages, read) {
        const newBook = new Book(title, author, pages, read);
        this.books.push(newBook);
    }

    displayBooks() {
        const outputDiv = document.querySelector(".book-list");
        outputDiv.innerHTML = "";

        this.books.forEach((book, index) => {
            const bookInfo = document.createElement("div");
            bookInfo.classList.add("column");
            bookInfo.id = `output-${index}`;
            bookInfo.textContent = book.info();
            outputDiv.appendChild(bookInfo);
        });
    }

}


//create a library "INSTANCE"
const myLibrary = new Library();

//modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("addBookBtn");
const span = document.getElementById("closeModal");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//event submit
document.getElementById("bookForm").onsubmit = function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    myLibrary.addBook(title, author, pages, read);
    myLibrary.displayBooks();

    modal.style.display = "none";
    this.reset();
}
