import React from 'react';
import ReactDOM from 'react-dom/client';
//se importa el BrowserRouter
import { BrowserRouter } from "react-router-dom";

// import { HookApp } from './HookApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MutipleCustomHooks } from './03-examples/MutipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

import './index.css';
import './08-useReducer/intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  //se agg todo el contenido en el BrowserRouter
  <BrowserRouter>
    <React.StrictMode>
        {/* <HookApp/> */}
        {/* <CounterApp/> */}
        {/* <CounterWithCustomHook/> */}
        {/* <SimpleForm/> */}
        {/* <FormWithCustomHook/> */}
        {/* <MutipleCustomHooks/> */}
        {/* <FocusScreen/> */}
        {/* <Layout/> */}
        {/* <Memorize/> */}
        {/* <MemoHook/> */}
        {/* <CallbackHook/> */}
        {/* <Padre/> */}
        {/* <TodoApp/> */}
        <MainApp />
      </React.StrictMode>
  </BrowserRouter>
)
