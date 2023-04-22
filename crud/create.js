const { read } = require("./read");
const { write } = require("./writeJson");

function create(titulo, descripcion) {  
  if (read().some(tarea => tarea.titulo === titulo)){
    return console.log("Esa tarea ya existe.");
  }
  
  const data = read();  
  data.push({titulo, descripcion});
  write(data);
  return console.log("Creado con exito");
}

module.exports = { create };