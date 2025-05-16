const fs=require ('fs');
//sync
// fs.writeFileSync("./test.txt","hellooo")
//async
// fs.writeFile("./test.txt","async wali hello",(err)=>{})
// const result=fs.readFileSync("./contacts.txt","utf-8")
// console.log(result);

//async
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//       console.log(err)
//     }
//     else{
//         console.log(result);
//     }

// })

fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());