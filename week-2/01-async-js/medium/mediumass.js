let fs = require("fs");

fs.readFile("b.txt" ,"utf-8" , function(err , data){
    if(err){
        console.error(err);
    }
    else{
        let content = modified(data);
        fs.writeFile("b.txt" , content , function(){
            if(err){
                console.log("err");
            }
            else{
                console.log("commit");
            }
        })
    }

    fs.readFile("b.txt" , "utf-8" ,function(err , data){
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    })
})

function modified(content){
    const lines = content.split('\n');

    // Remove extra spaces from each line
    // const modifiedLines = lines.map(line => line.replace(/\s+/g,' '));
    let modifiedLines = "";
    lines.forEach(function(value){
        let p = value.replace(/\s+/g,' ');
        modifiedLines += p;
    })

    // Join lines back together
    // const modifiedContent = modifiedLines.join('\n');

    return modifiedLines;
}