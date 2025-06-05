const express = require('express');
const path = require('path');
const app = express();

const publicDir = path.join(__dirname, '../../public');

// Serve all files in the public directory
app.use(express.static(publicDir));

// Ensure root always serves index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});