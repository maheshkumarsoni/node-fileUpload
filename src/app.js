const express = require('express');
const multer = require('multer');

const app = express();

// Initializing multer for file saving
const multerMiddleware = multer({ preservePath: true });

app.use(express.static('public'));

// applying Multer middleware to fetch file from the req body for single file uplaod use .single('file)
app.post( '/upload/exels', multerMiddleware.single('file'),
  (req, res) => {
    res.json({ file: req.file.buffer.toString('base64') });
  }
);

module.exports = app;
