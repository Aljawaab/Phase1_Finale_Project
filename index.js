document.addEventListener("DOMContentLoaded",() => {
    const baseUrl = "https://project-books.onrender.com/books"

    const handleClick = (book) => {
        const bookDetailDiv = document.getElementById("detail-div")
          
        const imagedetail = document.createElement("img")

        //filling the form
        const titleInput = document.getElementById("new-book-title")
        const authorInput = document.getElementById("new-book-author")
        


       // populating the elements
       imagedetail.src = book.image
       imagedetail.alt = book.booktitle
       
       titleInput.value = book.booktitle
       authorInput.value = book.author


       bookDetailDiv.innerHTML = ''


      //appending the image to book
      bookDetailDiv.appendChild(imagedetail)
      

      

    }
    
    const displayBook = () => {
    const booksDiv = document.getElementById("books-div")
        fetch(baseUrl)
        .then((resp) => resp.json())
        .then((books) => books.forEach((book) => {
          //creating element displayed in the booksDiv
          const img = document.createElement("img");
          img.src = book.image;
          img.alt = book.titlename;
          img.addEventListener('click', () => {       
              handleClick(book);
          
          
    
          });
          booksDiv.appendChild(img)
          console.log(booksDiv)
        }) )
};


// Adding a new book to the table upon form submission
const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get inputs from the form
    const titleInput = document.getElementById("new-book-title");
    const authorInput = document.getElementById("new-book-author");

    // Create a new row for the table
    const tableBody = document.getElementById("book-table-body");
    const row = document.createElement("tr");

    // Create cells
    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const doneCell = document.createElement("td");

    // Populate cells with form values
    titleCell.textContent = titleInput.value;
    authorCell.textContent = authorInput.value;

    // Create 'done reading' checkbox
    const doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCell.appendChild(doneCheckbox);

    // Append all cells to the row
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(doneCell);

    // Append the row to the table body
    tableBody.appendChild(row);

    // Clear the form inputs after submission
    titleInput.value = '';
    authorInput.value = '';

    // save the new book to persited to my wishlist after reload
    saveBookToJS({title: titleCell.textContent, author: author.textContent})
};

 //save book to db.json
 const saveBookToJS = (book) => {
    fetch("https://project-books.onrender.com/savedbooks", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(response => response.json())
    .then(data => 'Book saved:', data)
  };














})