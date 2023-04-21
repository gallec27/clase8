const fs = require("fs");

function read() {  
  const dataParseada = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
  return dataParseada;
}

module.exports = { read };
