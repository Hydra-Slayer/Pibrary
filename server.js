const express = require('express');
const path = require('path');

const app = express();
const port = 5000; // You can change the port if needed

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Add a dynamic route example
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, Shreyas!`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:5000/`);
});
