//liba

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


//modal


var modal = document.getElementById("myModal");
var btn = document.getElementById("addBookBtn");
var span = document.getElementById("closeModal");

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

document.getElementById("bookForm").onsubmit = function(event) {
    event.preventDefault();
    alert("Book added:\nTitle: " + document.getElementById("title").value + 
          "\nAuthor: " + document.getElementById("author").value + 
          "\nPages: " + document.getElementById("pages").value);
    
    modal.style.display = "none";
    
    this.reset();
}