const personajes = ['Goku', 'Vegeta', 'Gohan'];
const[, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['abc', 123];
}

const [letras,  numeros] = retornaArreglo();
console.log(letras,  numeros);

//tarea
/*
1. el primer valor del arr se llamará nombre
2. el segundo valor del arr se llamará setNombre
 */
const useState = (valor) => {
    return[valor, () => { console.log('Hola Mundo...'); }]
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();