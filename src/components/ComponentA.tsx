import { useState } from "react"
import ComponentB from "./ComponentB"

const ComponentA = ({text}: {text: string}) => {
 
  const [newText, setNewText] = useState(text);

  return (
    <>
    <h1>{newText}</h1>
    <ComponentB text={newText} setNewText={setNewText}/>
    </>
  )
}

export default ComponentA