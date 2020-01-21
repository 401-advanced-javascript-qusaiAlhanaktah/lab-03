'use strict';

const fs = require('fs');
const util = require('util');

const readerFile = (file, cb)=>{
    fs.readFile(file, (err,data)=>{
        if(err)cb(err);
        else cb(undefined, data.toString())
    });
}

const editFile = (file, cb)=>{
    fs.writeFile(file, (data)=>{
        console.log(file)
        if(err)cb(err);
        else cb(undefined, (data)=>{
            console.log(data)
            data.firstName ='Qusai';
            data.lastName ="Alhanaktah";
            data.hair.type= 'curly';
            data.hair.color= 'black';
            data.favoriteFoods=["flaffel","mansef","burgger"];
            data.married=true;
            data.kids=3;
        })
    })
}

module.exports = {readerFile,editFile}