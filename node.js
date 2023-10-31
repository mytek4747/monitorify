// Import required modules
const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
const port = 3000; // Choose an available port

// Connect to the SQLite database
const db = new sqlite3.Database('menu_board.db');

// Configure middleware to parse JSON requests
app.use(bodyParser.json());

// Define routes for managing monitors
app.get('/monitors', (req, res) => {
    // Simulate fetching a list of monitors from the database
    db.all('SELECT * FROM monitors', (err, rows) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
            return;
        }
        res.json(rows);
    });
});

// Define routes for managing images
app.get('/images', (req, res) => {
    // Simulate fetching a list of images from the database
    db.all('SELECT * FROM images', (err, rows) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
            return;
        }
        res.json(rows);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
