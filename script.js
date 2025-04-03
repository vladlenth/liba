//liba
const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.isRead = function() {
        if (this.read) {
            return "already read";
        } else {
            return "not read yet";
        }
    };

    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead()}.`;
    };
}

//add book to liba
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

//display books
function displayBooks() {
    const outputDiv = document.querySelector(".book-list");
    outputDiv.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookInfo = document.createElement("div");
        bookInfo.classList.add("column");
        bookInfo.id = `output-${index}`;
        bookInfo.textContent = book.info();
        outputDiv.appendChild(bookInfo);
    });
}

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

    addBookToLibrary(title, author, pages, read);
    displayBooks();

    modal.style.display = "none";
    this.reset();
}