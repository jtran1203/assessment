
function findAccountById(accounts,id) {
 return  accounts.find((account)=>{return account.id ===id})
 
}

function sortAccountsByLastName(accounts) {
 
return accounts.sort(function(a, b) {
  const nameOne = a.name.last.toUpperCase(); 
  const nameTwo = b.name.last.toUpperCase();
  if (nameOne < nameTwo) {
    return -1;
  }
  if (nameOne > nameTwo) {
    return 1;
  }


  return 0;
}); 
}


function count ( borrowsArray, accountId ){
	let total = 0
	borrowsArray.forEach(borrow => {
      if (borrow.id === accountId) {
      	total++
      }
    });
    return total
}
function getTotalNumberOfBorrows(account, books) {
  let borrowAccount = 0;
  for (let i = 0; i < books.length; i++) {
    let borrows = books[i].borrows
    borrowAccount += count ( borrows, account.id )
  }
  return borrowAccount
}

// function getTotalNumberOfBorrows(account, books) {
//   let borrowAccount = 0;
//   accountId = account.id
//   books.forEach((book)=>{
//     book.borrows.forEach((borrow)=>{
//       if(accountId === borrow.id){
//         borrowAccount +=1
//       }
//     })
//   })
//   return borrowAccount
// }

 function getBooksPossessedByAccount(account, books, authors) {
  let booksTaken = []; 
  
  books.forEach(book=>{
    if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      booksTaken.push(book);
    }
  })

  
  booksTaken.forEach(book=>{
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })

  return booksTaken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

