

import needle from 'needle';




needle.post(

    'http://localhost:3000/add-book',
    {bookName:"Harry Potter and the Philosopher's Stone", isbn:`978-0-7475-3269-9`, author:'J.K Rowling', yearPublished: '1997'},
    (err,res)=>{
        console.log(res.body);
    }
);

needle.get("http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&amp;author=J.K+Rowling",(err,res)=>{
    console.log(res.body);
});