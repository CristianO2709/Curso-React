const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
    direccion: {
        calle: 'Av. Los Pinos',
        numeroCasa: 1005,
        ciudad: 'Bogota',
        pais: 'Colombia',
    }
}

// console.table(persona);

const persona2 = {...persona};
persona2.nombre = 'Maria'

console.log(persona);
console.log(persona2);