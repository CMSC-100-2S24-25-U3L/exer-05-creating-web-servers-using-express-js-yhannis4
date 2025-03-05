

import needle from 'needle';


needle.get("http://localhost:3000/find-by-isbn-author",(err,res)=>{
    console.log(res.body);
});

needle.post(

    'http://localhost:3000/add-book',
    {bookName:"Harry Potter and the Philosopher's Stone", ISBN:`978-0-7475-3269-9`, Author:'J.K. Rowling', yearPublished: '1997', success:false},
    (err,res)=>{
        console.log(res.body);
    }
);