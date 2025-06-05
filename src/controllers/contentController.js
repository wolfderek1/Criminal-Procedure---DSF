const path = require('path');

const contentDirectory = path.join(__dirname, '../../public');

exports.getIndexPage = (req, res) => {
    res.sendFile(path.join(contentDirectory, 'index.html'));
};

// No need for individual file-serving functions.
// Express's static middleware in app.js will serve all files in the public directory.