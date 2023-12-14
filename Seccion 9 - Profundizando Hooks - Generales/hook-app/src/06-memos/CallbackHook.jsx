/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrmentFather = useCallback(
    (value) => {
      setCounter((i) => i + value);
    },
    [],
  )
  

  // const incrmentFather = () => {
  //   setCounter(counter + 1);
  // }

  return (
    <>
      <h1>useCallback Hook: { counter }</h1>
      <hr />


      <ShowIncrement increment={ incrmentFather }/>
    </>
  )
}
