// eslint-disable-next-line no-unused-vars
const Book = require("./Book");

const catalogue = [
    new Book("The Catcher in the Rye", "J.D. Salinger", 10),
    new Book("Dracula", "Bram Stoker", 0),
    new Book("Between the Assassinations", "Aravind Adiga", 9),

    new Book("Wolf Hall", "Hilary Mantel ", 31),
    new Book("Bring Up The Bodies", "Hilary Mantel", 31),
    new Book("A Place of Greater Safety", "Hilary Mantel", 11),
    new Book("Giving Up the Ghost", "Hilary Mantel", 8),
    new Book("The Assassination of Margaret Thatcher", "Hilary Mantel", 43),
    new Book("The Yellow Wallpaper", "Charlotte Perkins Gilman", 12),
    new Book("Conversations With Friends", "Sally Rooney", 1),
    new Book("Normal People", "Sally Rooney", 2),
    new Book("Everything I Never Told You", "Celeste Ng", 6),
    new Book("2666", "Robert Bolaño", 17),
    new Book("By Night In Chile", "Robert Bolaño", 8),
    new Book("A Tale of Two Cities", "Charles Dickens", 3),
    new Book("Oliver Twist", "Charles Dickens", 7),
    new Book("Great Expectations", "Charles Dickens", 1),
    new Book("The Blind Assassin", "Margaret Atwood", 8),
    new Book("Why Be Happy When You Could Be Normal?", "Jeanette Winterson", 19),
    new Book("The Origin of Species", "Charles Darwin", 50)
]

function checkBook(title) {
    if (!title) throw new Error("Please provide a title");
    // Your code here

    let result = false
    for (let i = 0; i < catalogue.length; i++) {
        const book = catalogue[i];
        if (book.title.toLowerCase().includes(title.toLowerCase())) {
            result = true;
        }
    }
    return result;
}

function countBooksByKeyword(keyword) {
    if (!keyword) throw new Error("Please provide a keyword");
    if (typeof keyword !== "string") throw new Error("Please provide the title of the book");
    // Your code here
    let count = 0;
    for (let i = 0; i < catalogue.length; i++) {
        const book = catalogue[i];
        if (book.title.toLowerCase().includes(keyword.toLowerCase()) || book.author.toLowerCase().includes(keyword.toLowerCase())) {
            count++;
        }
    }
    return count;
}

function getBooksByAuthor(author) {
    if (!author) throw new Error("Please provide an author");
    // Your code here
    let booksByAuthor = [];

    for (let i = 0; i < catalogue.length; i++) {
        const book = catalogue[i];

        if (book.author.includes(author)) {
            booksByAuthor.push(book.title)
        }
    }
    return booksByAuthor;
}

function getStockCount(title) {
    if (!title) throw new Error("Please provide a title");
    // Your code here
    let result;

    for (let i = 0; i < catalogue.length; i++) {
        const book = catalogue[i];

        if (book.title.includes(title)) {
            result = book.quantity;
        }
    }

    if (typeof result === 'undefined') result = 'Not in our catalogue';

    return result;
}

function stockReview(title) {
    if (!title) throw new Error("Please provide a title");
    // Your code here
    const stock = getStockCount(title);

    let result = "";

    if (stock === 0) {
        result = 'Not in Stock';
    } else if (stock >= 1 && stock <= 5) {
        result = 'Low Stock';
    } else if (stock > 5 && stock <= 10) {
        result = 'Medium Stock';
    } else if (stock > 10) {
        result = 'High Stock'
    }

    /*
    switch (true) {
        case stock === 0:
            result = 'Not in Stock';
            break;
        case stock >= 1 && stock <= 5:
            result = 'Low Stock';
            break;
        case stock > 5 && stock <= 10:
            result = 'Medium Stock';
            break;
        case stock > 10:
            result = 'High Stock'
            break;
    }
    */
    return result;
}

module.exports = {
    checkBook,
    countBooksByKeyword,
    getBooksByAuthor,
    getStockCount,
    stockReview
};