const fs = require("fs");
const path = require("path");

//create a folder 
//there are synchronous and asynchronous methods(takes in a callback)
fs.mkdir(path.join(__dirname, "test"), {}, (err) => { 
    if(err) throw err;
    console.log("folder created");
});

//create and write [Write file overrides the data in the file]
fs.writeFile(path.join(__dirname, "test", "test.txt"), "Hello from test!", (err) => {
    if (err) throw err;
    console.log("text written");
});

//append data
fs.appendFile(path.join(__dirname, "test", "test.txt"), "I love Node.js", (err) => {
    if (err) throw err;
    console.log("text written");
});

//read file
fs.readFile(path.join(__dirname, "test", "test.txt"), "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

//rename file
fs.rename(path.join(__dirname, "test", "test.txt"), path.join(__dirname, "/test", "testing.txt"), (err) => {
    if(err) throw err;
    console.log("renamed");
})