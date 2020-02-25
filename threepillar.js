class Bookshelf{
    constructor(){
    this.favoriteBooks=[];
    }
    addFavouriteBooks(books){
       this.favoriteBooks.push(books);
    }
    printFavoriteBooks(){
        this.favoriteBooks.forEach((myBooks,index)=>{
            console.log(index+1+" "+myBooks.toString());
        });
    }
}

var books=new Bookshelf();
books.addFavouriteBooks("Yup")
books.printFavoriteBooks();