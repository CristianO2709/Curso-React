describe('pruebas en <DemoComponent/>', () => { 
    test('Esta pruebas no debe de fallar', () => {
        // 1. Inicializacion
        const message1 = 'Hola Mundo';
    
        // 2. Estimulo
        const message2 = message1.trim();
    
        // 3. Observar el comportamiento... esperado
        //expect(message2).toBe('Hola Mundo');
        expect(message1).toBe(message2);
    });
 })