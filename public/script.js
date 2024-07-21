document.addEventListener('DOMContentLoaded', function () {
    
    const books = [
        {
            title: 'Atomic Habits',
            author: 'James Clear',
            link: '/assets/Atomic Habits James Clear.pdf'
        },
        {
            title: 'The 48 Laws Of Power',
            author: 'Robert Greene',
            link: '/assets/The 48 Laws Of Power Robert Greene.pdf'
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
