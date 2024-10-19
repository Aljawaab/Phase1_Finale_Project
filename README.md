# Books App
#### Books App Built With HTML, CSS, JS and db.json, OCT 19 2024 
#### By **Abdul Aljawaab** 

## Description 
A web application designed for book enthusiasts to manage their personal library and wishlist. Users can view books, add new books to their wishlist, and mark books as "read" once they've finished them.

## How to Use
### Requirements
* A computer, tablet or phone
* Access to the internet

### View Live Site 
Ensure that your device of choice has a browser installed.
Click the link provided below to view the site.

https://dennis-kiboi.github.io/pixelart/

## Features
- **View Available Books**: A list of books from the library is displayed with book covers. Clicking on a book cover shows its details.
- **Add Books**: Users can add new books (title and author) to their wishlist using the form provided.
- **Track Read Books**: Each book added to the table has a "Done Reading" checkbox. Users can tick this checkbox to mark books they've completed.
- **Book Details**: When a book is clicked, its cover image is displayed, and the form is pre-filled with its title and author for easy editing.

## Technologies Used

- **HTML5**: For structuring the app.
- **CSS**: External styles for basic design (custom styles can be added in `styles.css`).
- **JavaScript**: Used to manage app functionality, fetch book data, and handle user interactions.
- **JSON**: Simulates a backend with book data in a local array.

## To Run Locally
## How to Use

1. Clone the repository:
    ```bash
    git clone git@github.com:Aljawaab/Phase1_Finale_Project.git
    ```

2. Open `index.html` in your browser to run the app locally.

3. **View Available Books**: Initially, a list of book covers will appear from the `books` array.
    - Click on any book cover to view the details in the form.

4. **Add a New Book**:
    - Use the form titled "Book description" to add a new book.
    - The book's title and author is automatically filled and you only need to click "Add New Book".
    - The book will be added to the table along with an option to mark it as "read".

5. **Mark Books as Read**:
    - For each book added to the table, there is a checkbox under the "DONE READING" column. Mark the book as read by ticking the checkbox.

## Files in the Project

- **index.html**: The main HTML file containing the structure of the app.
- **styles.css**: External stylesheet for the app (link to be added).
- **index.js**: JavaScript file containing the functionality, including fetching book data, handling form submission, and marking books as read.

## Future Enhancements

- Add persistent storage to store books in the browser's local storage or a backend API, so data isn't lost when the page is refreshed.
- Improve the user interface with more styling or additional features like book categories or ratings.

## Getting Started

To contribute or run this app locally, clone the repository and open `index.html` in your browser.

---

## License 
MIT License

Copyright &copy; 2024 Abdul Aljawaab

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Feel free to contribute by submitting issues or making pull requests!

