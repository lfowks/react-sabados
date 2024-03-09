import { useContext } from "react"
import MyContext from "../MyContext"

const ComponentD = () => {

  const {text} = useContext(MyContext);

  return (
    <h2>{text}</h2>
  )
}

export default ComponentD