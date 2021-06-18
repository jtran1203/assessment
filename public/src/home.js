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

    books.forEach((book) => {
      let number = book.borrows.length
      let findAuthor = authors.find((person) => person.id === book.authorId);
      let writer = `${findAuthor.name.first} ${findAuthor.name.last}`
      book['name'] = writer;
      book['count'] = number;
    })
    let firstArr = books.map(({ name, count }) => ({name, count}))
    let content = []
    firstArr.forEach((item) => {
      if (content.some((obj) => obj.name === item.name)) {
        for (let i = 0; i <content.length; i++) {
          if (content[i].name === content.name) {
            content[i].count += item.count
          }
        }
      } else {
        let newObject = {}
        newObject.name = item.name;
        newObject.count = item.count;
      content.push(newObject);
      }
    })
    content.sort((a, b) => b.count - a.count)
    return content.slice(0,5)
   
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
