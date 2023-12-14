/* eslint-disable react/display-name */
import React from "react"

/* eslint-disable react/prop-types */
export const ShowIncrement = React.memo(({ increment }) => {
    console.log('Me volvi a redibujar :(');

  return (
    <button 
        className="btn btn-primary"
        onClick={ () => { increment( 5 ) } }>
        Incrementar
    </button>
  )
})
