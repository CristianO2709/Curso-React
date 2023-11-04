const persona = {
    nombre: 'Joe',
    edad: 27,
    clave: 'iroman',
}

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({nombre, edad, clave, rango = 'capitan'}) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: -34.6036,
            lng: -58.3816
        }
    }
}

const { nombreClave, anios, latlng: {lat, lng} } =  useContext(persona);


console.log(nombreClave, anios);
console.log(lat, lng);