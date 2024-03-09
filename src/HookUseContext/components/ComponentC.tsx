import { useContext } from "react"
import MyContext from "../MyContext"

const ComponentC = () => {

  const { setText } = useContext(MyContext)

  return (
    <button type='button' onClick={()=>setText('hola2')}>CAMBIAR</button>
  )
}

export default ComponentC