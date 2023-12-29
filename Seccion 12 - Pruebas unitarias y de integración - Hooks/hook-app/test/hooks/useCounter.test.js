import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

/* eslint-disable no-undef */
describe('Pruebas en el useCounter', () => { 
    test('debe de retornar los valores por defecto', () => {
        //para renderizar un hook
        const { result } = renderHook(() => useCounter());
        //se obtiene el objeto, el arreglo, etc.
        const { counter, decrement, increment, reset } = result.current;
        //para hacer pruebas
        expect( counter ).toBe(10);
        expect( decrement ).toEqual(expect.any(Function));
        expect( increment ).toEqual(expect.any(Function));
        expect( reset ).toEqual(expect.any(Function));
     });

     test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect( result.current.counter).toBe(100)
      });

      test('debe de incrementar el contador', () => {
        //se establece el valor por defecto que es igual a 100
        const { result } = renderHook(()=> useCounter(100));
        //desestructuro el objeto del hook para obtener el valor increment
        const { increment } = result.current;

        //
        act(() => {
            increment();
            increment(2);
        });

        //se hace la prueba y el resultado debe de ser 103
        expect( result.current.counter ).toBe(103);

       });

      test('debe de decrementar el contador', () => {
        //se establece el valor por defecto que es igual a 100
        const { result } = renderHook(()=> useCounter(100));
        //desestructuro el objeto del hook para obtener el valor increment
        const { decrement } = result.current;

        //el act es para actualizar el estado del decrement
        act(() => {
            decrement();
            decrement(2);
        });

        //se hace la prueba y el resultado debe de ser 97
        expect( result.current.counter ).toBe(97);

       });

      test('debe de reiniciar el contador', () => {
        //se establece el valor por defecto que es igual a 100
        const { result } = renderHook(()=> useCounter(100));
        //desestructuro el objeto del hook para obtener el valor increment
        const { decrement, reset } = result.current;

        //el act es para actualizar el estado del reset
        act(() => {
            decrement()
            reset();
        });

        //se hace la prueba y el resultado debe de ser 100
        expect( result.current.counter ).toBe(100);

       });
 });