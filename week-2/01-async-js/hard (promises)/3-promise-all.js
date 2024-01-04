/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
 return new Promise(function(resolve){
     setTimeout(resolve,t1*1000);
 })
}

function wait2(t) {
return new Promise(function(resolve){
    setTimeout(resolve,t2*1000);
})
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t3*1000);
    })

}

function calculateTime(t1, t2, t3) {
    const p1 = new Promise(function(resolve){
        setTimeout(resolve , t1*1000);
    })

    const p2 = new Promise(function(resolve){
        setTimeout(resolve , t2*1000);
    })

    const p3 = new Promise(function(resolve){
        setTimeout(resolve , t3*1000);
    })

    Promise.all([p1 , p2 ,p3])
        .then((result)=>{
            console.log("All promises result :",results);
        });
    }

  


module.exports = calculateTime;
