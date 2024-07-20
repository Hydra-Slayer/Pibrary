document.addEventListener('DOMContentLoaded', function () {
    const books = [
        {
            title: 'Book Title 1',
            author: 'Author Name 1',
            link: 'path/to/book1.pdf'
        },
        {
            title: 'Book Title 2',
            author: 'Author Name 2',
            link: 'path/to/book2.pdf'
        }
        
        // Add more books here
    ];

    const booksContainer = document.getElementById('books-container');

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;
        bookDiv.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Author: ${book.author}`;
        bookDiv.appendChild(bookAuthor);

        const bookLink = document.createElement('a');
        bookLink.href = book.link;
        bookLink.target = '_blank';
        bookLink.textContent = 'Read Book';
        bookDiv.appendChild(bookLink);

        booksContainer.appendChild(bookDiv);
    });
});