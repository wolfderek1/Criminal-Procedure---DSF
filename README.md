# Criminal Procedure Web Project

This project provides access to the contents of the Criminal Procedure course materials, including quizzes and other resources.

## Project Structure

```
criminal-procedure-web
├── public
│   ├── index.html          # Main HTML page for the website
│   ├── quizzes             # Folder containing HTML quizzes
│   │   ├── quiz1.html
│   │   └── quiz2.html
│   ├── assets              # Folder for static assets
│   │   └── style.css
│   └── ...                 # Other course files and folders (PDFs, modules, etc.)
├── src
│   ├── app.js              # Entry point of the application
│   └── controllers
│       └── contentController.js # Logic for serving content
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```sh
   git clone <https://github.com/wolfderek1/Criminal-Procedure>
   cd criminal-procedure-web
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run the application**:
   ```sh
   npm start
   ```

4. **Access the application**:  
   Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) (or the port specified in your `app.js`).

## Usage

- The main page provides links to all quizzes, modules, and course materials.
- Any file or folder placed in the `public` directory will be accessible from the website.
- Quizzes are interactive HTML files located in the `quizzes` folder.

## Contributing

Feel free to submit issues or pull requests for improvements or additional content.

## License

This project is licensed under the ISC License.