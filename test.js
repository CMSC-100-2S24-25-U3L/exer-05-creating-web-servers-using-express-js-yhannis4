

import {appendFileSync} from "node:fs";
import fs from 'node:fs';

function readFile(){

    var x = "book2";
    var y = "author";

    const data = fs.readFileSync('books.txt', 'utf8');

    var newData = data.split("\n");


    for(var i = 0; i < newData.length; i++){

        var item = newData[i];

        var currentBook = item.split(",");

        if (x == currentBook[0] && y == currentBook[1]){
            console.log(currentBook.toString());
            break;
        }
    }


    // console.log(data);
    // console.log(newData.toString());
}

readFile();