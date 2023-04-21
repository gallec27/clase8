const fs = require("fs");

function write(data){
    fs.writeFileSync("./data.json", JSON.stringify(data));
}

module.exports = { write };