// exportacion nombrada
// para poder usar esta funcion primero debe exportarse la funcion
export function saludo(){
    console.log("hola todos")
}
// si la funcion no contiene la palabra "export" antes de "function" entonces esta no podra ser usada desde otros ficheros
 function holi(){
    console.log("holi")
}

// exportacion por defecto
// las exportaciones por defecto funcionan practicamente igual que las nombradas, la diferencia es que al ser por defecto se podra reasignar el nombre dentro de la importacion
// NO DEBE haber mas de 1 exportacion por defecto por fichero
export default function cosas(){
    console.log("esto es una cosa por default")
}