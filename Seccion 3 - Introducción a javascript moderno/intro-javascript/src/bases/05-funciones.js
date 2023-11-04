// function saludar(params) {
//     return `Hola, ${params}`
// }

//funcion
// const saludar = function(params) {
//     return `Hola, ${params}`
// }

//funcion de flecha
const saludar2 = (params) => {
    return `Hola ${params}`
}
const saludar3 = (params) => `Hola ${params}`
const saludar4 = (params) => `Hola Mundo`


console.log(saludar2('Goku'));
console.log(saludar3('Vegeta'));
console.log(saludar4());

/*const getUser = function() {
    return {
        id: 'abc123',
        user_name: 'John Doe'
    }
};*/

const getUser = () =>({
    id: 'abc123',
    user_name: 'John Doe'
});

const user = getUser();
console.log(user);

console.log(getUser());

//Tarea
/*
1. transformar una funcion de flecha
2. tiene que retornar un objeto implicito
3. pruebas
*/
/*function getUsuarioActivo(nombre) {
    return {
        id: 'abc123',
        user_name: nombre
    }
}*/

//Respuesta
const getUsuarioActivo = (nombre) => ({
    id: 'abc123',
    user_name: nombre
});

const usuarioActivo = getUsuarioActivo('cristian');
console.log(usuarioActivo);