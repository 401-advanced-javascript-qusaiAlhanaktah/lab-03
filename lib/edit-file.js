'use strict';

const fs = require('fs');
const util = require('util');
const readingFile = util.promisify(fs.readFile) ;
const readerFile = (file, cb)=>{
    return readingFile(file)
    .then( (data) => {
      return data ;
    })
    .catch(error => error);
};

const  writeFunc = util.promisify(fs.writeFile);
const editFile = (file,data)=>{
return writeFunc(file,data);
}
// const editFile = (file, cb)=>{
//     fs.writeFile(file, (err,data)=>{
//         console.log(file)
//         if(err)cb(err);
//         else cb(undefined, (jasnData)=>{
//             data.firstName ='Qusai';
//             data.lastName ="Alhanaktah";
//             data.hair.type= 'curly';
//             data.hair.color= 'black';
//             data.favoriteFoods=["flaffel","mansef","burgger"];
//             data.married=true;
//             data.kids=3;
//         })
//     })
// })

// }

module.exports = {readerFile,editFile}