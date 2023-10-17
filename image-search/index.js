const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Load environment variables from .env file
require('dotenv').config();

app.get('/e', (req, res) => {
  res.send('Hello, Express and MySQL!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
