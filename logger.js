const EventEmitter = require("events");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

class Logger extends EventEmitter {
    log(msg){
        this.emit("log", {id: uuid.v4(), msg: msg});
    }
}

const logger = new Logger(); 

//if file doesn't exists
// fs.mkdir(path.join(__dirname, "logged-data"), {}, (err) => {
//     if(err) throw err;
//     console.log("folder created")
// })

logger.on("log", (data) => {    
    fs.writeFile(path.join(__dirname, "logged-data", "logged-data.txt"), data.toString(), (err) => {
        if(err) throw err;
        console.log("success");
    })
});

logger.log("Hello");