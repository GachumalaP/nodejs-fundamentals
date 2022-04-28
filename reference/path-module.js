const path = require("path")

//get file name
console.log(path.basename(__filename));

//Directory name 
console.log(path.dirname(__filename));

//file extension 
console.log(path.extname(__filename));

//create path object 
console.log(path.parse(__filename));

//concatenate paths 
console.log(path.join(__dirname, "test", "testFile")) 
//works well with different delimiters for example we have different delimiters in windows and mac
