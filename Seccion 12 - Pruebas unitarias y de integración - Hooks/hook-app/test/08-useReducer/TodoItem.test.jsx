import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

/* eslint-disable no-undef */
describe('Pruebas en <TodoItem/>', () => { 
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();

    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el TODO pendiente de completar', () => { 
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const liElement = screen.getByRole('listitem');
        expect ( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className).toContain('align-self-center');
        expect( spanElement.className).not.toContain('text-decoration-line-through');

        // screen.debug();
    });
    
    test('debe de mostrar el TODO completado', () => { 
        todo.done = true;

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className).toContain('text-decoration-line-through');

        // screen.debug();
    });

    test('span debe de llamar el TooggleTodo cuando se hace click', () => { 
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        //simula el click
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
     });

    test('button debe de llamar el deleteTodo', () => { 
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const deleteButton = screen.getByRole('button');
        //simula el click
        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
     });
     
 });