function findAuthorById(authors, id) {
   return  authors.find((author)=>{return author.id ===id})
}

function findBookById(books, id) {
   return  books.find((book)=>{return book.id ===id})
}


function partitionBooksByBorrowedStatus(books) {
 let result = [] 
let yet = result.push(books.filter((book) => book.borrows[0].returned === false));
let back = result.push(books.filter((book) => book.borrows[0].returned === true));
return result
}

function getBorrowersForBook(book, accounts) {
  let result = [];                  
  let borrowers = book.borrows;     
  borrowers.forEach(borrower => {
    let person = accounts.find(customer => customer.id === borrower.id);
    
    
    let numberOfPerson = person;                    
    numberOfPerson['returned'] = borrower.returned;   
    result.push(numberOfPerson);                  
  })

  return result.slice(0,10);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
