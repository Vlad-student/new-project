// function filterBooksByGenre(books,genre) {
//     return books.filter((book)=> book.genre === genre)
// }

// const booksgenre = filterBooksByGenre(books, 'Романтика')
// console.table(booksgenre);


// function filterBooksByPages(books, minpages,maxpages){
//     return books.filter((book)=> book.pages >= minpages && book.pages <= maxpages)
// }
// const bookspages = filterBooksByPages(books,200,500)
// console.table(bookspages);


// function sortBooksByPages(books){
//     return books.toSorted((book1,book2)=> book1.pages - book2.pages);
// }
// const booksPageSort=sortBooksByPages(books)
// console.table(booksPageSort)


// function sortBooksByYear(books){
//     return books.toSorted((create2,create1)=> create2.yearCreate - create1.yearCreate);
// }
// const booksYearSort=sortBooksByYear(books)
// console.table(booksYearSort)

// function getTitleByAuthor(books, author){
//     return books
//     .filter ((books)=> books.author === author)
//     .map((book) => book.title);
// }
// const boooksAuthor = getTitleByAuthor(books, 'Джордж Орвелл')
// console.table(boooksAuthor)


// function getYearAndBook (books,yearCreate) {
//     return books
//     .filter ((books) => books.yearCreate === yearCreate)
//     .map((books)=> books.author)
// }
// const boooksYearAuthor = getYearAndBook(books, 1949)
// console.table(boooksYearAuthor)


function getGenreAndBook (books,genre) {
    return books
    .filter ((books) => books.genre === genre)
    .toSorted((book1,book2)=>{
        if (book1===book2.title) {
        return 0;
    }
    if(book1>book2.title){
return 1;
    }
if (book1<book2.title) {
    return -1;
}
});
}
const boooksTitleAuthor = getGenreAndBook(books, 'Фікція')
console.table(boooksTitleAuthor)