class Book {
    constructor(title, author, quantity) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;

    }
    addStock(n) {
        if (typeof n !== "number") throw new Error("Please provide a number");

        if (n < 0) {
            n = 0;
        }
        this.quantity += n;
    }

    removeStock(n) {
        if (typeof n !== "number") throw new Error("Please provide a number");

        if (n < 0) {
            n = 0;
        } else if (n > this.quantity) {
            n = this.quantity;
        }
        this.quantity -= n;
    }
}

module.exports = Book;