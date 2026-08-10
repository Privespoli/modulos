// en las importaciones si estas estan encerradas dentro de una llave entonces deben tener el NOMBRE EXACTO con el que fueron declaradas
// se pueden importar varias funciones del mismo fichero dentro de la misma importacion, separadas por una coma "," Ej: {funcionA, funcionB, funcionC}
import {saludo} from './funciones.js';

// importacion por defecto
// esta importacion se hace sin llaves, solo puede haber 1 importacion por defecto por cada fichero que haga la exportacion, es decir que si tengo 3 ficheros que hacen "export default" puedo importar 1 para cada uno de esos ficheros, ene ste ejemplo serian 3 importaciones
// la impotacion por defecto reasigna el nombre de la funcion al que tu desidas durante la funcion, es decir que si la funcion se llama "pepito" durante la importacion lo puedo renombrar y llamar "fulanito"
import otra from './funciones.js'

// function saludar(){
//     saludo()
// }

// window.saludar = saludar;


saludbt.addEventListener('click', ()=>{
    saludo();
    otra();
})