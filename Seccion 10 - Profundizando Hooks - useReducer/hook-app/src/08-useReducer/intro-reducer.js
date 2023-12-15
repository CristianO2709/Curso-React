const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false
}];

//estructura del reducer debe de tener un: estado inicial, accion
const todoReducer = (state = initialState, action = {}) => {
    //si la accion tiene un tipo se agg un nuevo estado al reduce
    if (action.type === '[TODO] add todo') {
        return [ ...state, action.payload ]
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

//un nuevo estado para ser agg al reduce
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

//se manda al reduce el estado inicial, y la accion
todos = todoReducer(todos, addTodoAction)

console.log(todos);