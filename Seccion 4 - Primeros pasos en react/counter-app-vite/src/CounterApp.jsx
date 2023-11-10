import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value)
    
    const handleDec = () => {
        setCounter(counter - 1)
    }

    const handleRes = () => {
        setCounter(value)
    }

    const handleInc = () => {
        setCounter(counter + 1);
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handleDec } > -1 </button>
        <button onClick={ handleRes }> Reset </button>
        <button onClick={ handleInc }> +1 </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
  }