const fs=require ('fs');
const os=require('os');
//sync
// fs.writeFileSync("./test.txt","hellooo")
//async
// fs.writeFile("./test.txt","async wali hello",(err)=>{})


// console.log("1");
// //sync-blocking-thread    
// const result=fs.readFileSync("./contacts.txt","utf-8")
// console.log(result);
// console.log("2");

//async-non-blocking
// console.log("1");
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//       console.log(err)
//     }
//     else{
//         console.log(result);
//     }

// })
// console.log("2");

// fs.appendFileSync("./test.txt","hey there \n");
// fs.cpSync("./test.txt","./copy.txt");
// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt"));
// fs.mkdirSync("debu/bubu/tunnu",{recursive: true });


//default thread pool size=4
// usually =cores

console.log(os.cpus().length);