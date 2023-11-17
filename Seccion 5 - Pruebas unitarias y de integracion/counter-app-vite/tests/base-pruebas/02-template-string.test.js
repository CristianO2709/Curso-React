/* eslint-disable no-undef */
import { getSaludo } from "../../src/base-pruebas/02-template-string";

//se recomienda agg el mismo nombre a la carpeta o al archivo para hacer pruebas
describe('Pruebas en 02-template-string', () => { 
    test('getSaludo debe de retornar "Hola Alejandro"', () => { 
        const name = 'Alejandro';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${ name }`)
     });
 });