import { useContext } from "react";
import MyContext from "../MyContext";
import ComponentB from "./ComponentB";


const ComponentA = () => {

  const { text } = useContext(MyContext);
  
  return (
    <>
    <h1>{text}</h1>
    <ComponentB/>
    </>
  )
}

export default ComponentA