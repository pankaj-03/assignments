//1-counter.md

let count = 0;
function counter1(count){
    setInterval(function(){
        console.log("count :",count);
        count++;
        counter1(count);
    },1000);
}


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