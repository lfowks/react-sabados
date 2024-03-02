import { useEffect, useState } from "react";

export const Counter = () => {
 
  const [myCounter, setMyCounter] = useState(0);

  useEffect(() => {
   console.log("Counter LOAD")
  }, []) //LOAD
  
  useEffect(() => {
    console.log("Counter CAMBIÓ");
   }, [myCounter]) //UPDATE
  
  const increment = () => {
    setMyCounter((current) => current + 1);
  };

  const decrement = () => {
    setMyCounter(myCounter - 1);
  };

  const reset = () => {
    setMyCounter(0);
  };

  return (
    <>
    <button type="button" onClick={decrement}>--</button>
    <h1>{myCounter}</h1>
    <button type="button" onClick={increment}>++</button>

    <button type="button" onClick={reset}>Reset</button>
    </>
  )
}
