/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
// import { memo } from 'react';

export const Small = React.memo(({ value }) => {
    console.log('Me volvi a redibujar :(');
  return (
    <small> { value } </small>
  )
})
