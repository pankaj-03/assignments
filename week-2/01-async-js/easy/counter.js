//1-counter.md

// let count = 0;
// function counter1(){
//     setInterval(function(){
//         console.log("count :",count);
//         count++;
//     },1000);
// }
// counter1();


//2-counter.md

// let count = 0;
// function counter(){
//     setTimeout(function(){
//         console.log("count :", count);
//         count++;
//         counter();
//     },1000);
// }
// counter();

//3-read-from-file.md
 let fs = require("fs");
//read
fs.readFile("a.txt" ,"utf-8", function(err, data){
    console.log(data);
})

//write 
let content = "my name is Pankaj Sunal";
fs.writeFile("a.txt",content,function(err){
    if(err){
        console.error(error);
    }
    else{
        console.log("commit");
    }
}) 

fs.readFile("a.txt" ,"utf-8" , function(err , data){
    console.log(data);
})
