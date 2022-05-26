const getTheTitles = function(books) {
    let booksArray = []
    for(let i = 0; i< books.length; i++){
        booksArray.push(books[i].title)
    }
    return booksArray
};

// Do not edit below this line
module.exports = getTheTitles;
