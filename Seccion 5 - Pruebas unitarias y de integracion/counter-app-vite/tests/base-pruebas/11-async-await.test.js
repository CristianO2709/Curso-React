import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Prueba en 11-async-await', () => { 
    test('getImagen debe de retornar un error si no tenemos el API KEY', async () => {
        const resp = await getImagen();
        // expect(typeof url).toBe('string');
        expect(resp).toBe('No se encontro la imagen');
     });
 });