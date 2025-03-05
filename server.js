
import express from "express";
import {appendFileSync} from "node:fs";
import fs from 'node:fs';

const app = express(); //instantiating server
app.use(express.json());
app.use(express.urlencoded({extended: false}));

function writeFile(bookName, ISBN, Author, Year){

    var data1 = [bookName, ISBN, Author, Year].join(',');
    appendFileSync('books.txt', data1);
    return true;

}

function readFile(ISBN, author){


    const data = fs.readFileSync('books.txt', 'utf8');

    var books = data.trim().split("\n");


    for(var book of books){

        const [bookName, bookISBN, bookAuthor, yearPublished] = book.split(",");
        if(ISBN == bookISBN && author == bookAuthor){
            return {bookName, bookISBN, bookAuthor, yearPublished};
        }
    }

    return null;
}



app.get('/find-by-isbn-author',(req,res)=>{
    
    var author = req.query.author;
    var isbn = req.query.isbn;

    const book = readFile(isbn, author);

    res.json({book});

});




app.post('/add-book', (req,res) => {

    if (!req.body.bookName || !req.body.isbn || !req.body.author || !req.body.yearPublished) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const success = writeFile(req.body.bookName, req.body.ISBN, req.body.Author, req.body.yearPublished);
    
    res.json({ success }); 
});


//listen to port 3000
app.listen(3000,() => {console.log('Server started at port 3000')});