/* eslint-disable react/prop-types */
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState([])

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories(categories => [inputValue, ...categories]); 2da forma
    onNewCategory( inputValue.trim() );
    //para limpiar el input
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder='Buscar gifs'
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}