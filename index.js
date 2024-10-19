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














})