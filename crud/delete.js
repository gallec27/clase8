const { read } = require("./read");
const { write } = require("./writeJson");

function del(titulo){
    const data = read();
    if (data.some((tarea) => tarea.titulo === titulo)){
        write(data.filter(tarea => tarea.titulo !== titulo))
        return console.log("Borrado con éxito.");    
        //fs.writeFileSync("./tasksData.json", JSON.stringify(.filter(tarea => tarea.titulo !== tituloBorrar)));     
    }
}

module.exports = { del }