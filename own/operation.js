const fs = require('fs');

// //writeFile
// let content = "This is dynamic created file";
// fs.writeFile('./abc.txt', content, (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("saved");
//     }
// });


// //readFile
// //asynchronus: 
// fs.readFile('./abc.txt', (error, data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data.toString());
//     }
// });
// console.log("tarminated");



// //appendFile
// fs.appendFile("./abc.txt", " new contend",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("saved");
//     }
// });console.log()


//deleteFile
fs.unlink("./abc.txt",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("deleted");
    }
});

