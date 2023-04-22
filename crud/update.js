const { read } = require("./read");
const { write } = require("./writeJson");

function update(titulo, descripcion) {
  if (read().some((tarea) => tarea.titulo === titulo)) {
    const data = read().filter((tarea) => tarea.titulo !== titulo);
    data.push({ titulo, descripcion });
    write(data);
    return console.log("Actualizado con exito");
  }

  return console.log("No existe la tarea.");
}

module.exports = { update };
