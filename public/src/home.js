function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}


function getBooksBorrowedCount(books) {
  let count =0; 
  
  books.forEach((book) => {
    if (book.borrows.find((lib) => lib.returned === false)) {
      count++;
    }
  }); 
  return count;
}

function getMostCommonGenres(books) {
 let obj = {} 
 books.forEach((book)=>{
  if(obj[book.genre]){
    obj[book.genre]++;
  } else {
    obj[book.genre] = 1
  }
 })
   return Object.entries(obj).map(([name, count]) => {
    return {
      name,
      count
    }
  }).sort((a,b)=> b.count - a.count).slice(0, 5)
}

function getMostPopularBooks(books) {
  return books.map((book) => {
  return {name: book.title, count: book.borrows.length}
  }).sort((a, b) => a.count < b.count ? 1 : -1).slice(0, 5)
}

function getMostPopularAuthors(books, authors) {

  const authorCount = books.reduce( (acc, book) => {
      const authorId = book.authorId;
      if( acc[authorId] ){
        acc[authorId] += book.borrows.length
      }
      else{
        acc[authorId] = book.borrows.length
      }
      return acc
    }, {})
  
   const content = []
  
   for( let key in authorCount ){
     const authorInfo = authors.find( (author) => author.id == key )
     const author = {
       name : `${authorInfo.name.first} ${authorInfo.name.last}`,
       count : authorCount[key]
     };
     content.push(author )
   }
  
  content.sort( (a,b) => b.count - a.count)
  return content.splice(0,5)
  
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
