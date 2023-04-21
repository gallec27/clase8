const { read } = require("./crud/read");
const { create } = require("./crud/create");
const { del } = require("./crud/delete");

const data = process.argv;
const command = (action, param1, param2) => {
switch (action) {
  case "read":
    console.log(read());
    break;
  case "create":
    create(param1, param2);
    break;
  case "delete":
    del(param1);
    break;
  default:
    console.log("No se encontró ningún comando");
}}

command(data[2], data[3], data[4]);