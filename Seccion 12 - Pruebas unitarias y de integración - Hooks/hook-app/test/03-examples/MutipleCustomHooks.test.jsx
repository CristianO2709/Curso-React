/* eslint-disable no-undef */
import { fireEvent, render, screen,  } from "@testing-library/react";
import { MutipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch.js');
jest.mock('../../src/hooks/useCounter.js');

/* eslint-disable no-undef */
describe('Pruebas en <MutipleCustomHooks/>', () => {
    const mockIncrement = jest.fn();
    
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {
        //para renderizar un componente
        render(<MutipleCustomHooks/>);

        //se espera que el componente tenga el texto Loading...
        expect(screen.getByText('Loading...'));
        //se espera que el componente tenga
        expect(screen.getByText('Breaking Bad Quotes'));

        //se espera que el btn este deshabilitado
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeTruthy();

        //para visualizar que elementos tiene el componente
        //screen.debug();
     });

     test('debe de mostrar un Quote', () => { 
        useFetch.mockReturnValue({
            data: [{ author: 'Alejandro', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render( <MutipleCustomHooks/> );
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Alejandro') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();
        screen.debug();

    });

    test('debe de llamar la funcion de incrementar', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Cristian', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null,
        });


        render(<MutipleCustomHooks/>);
        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        fireEvent.click(nextButton);

        expect( mockIncrement ).toHaveBeenCalled();
     });

 });