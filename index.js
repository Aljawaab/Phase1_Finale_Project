

































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





