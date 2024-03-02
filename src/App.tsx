import MyButton from "./components/MyButton"
import { imprimir } from "./logica/funciones"
function App() { 
  return (
    <>
      <MyButton action={() => imprimir("Button 2")} text="Button 1"/>
      <MyButton action={() => imprimir("Button 2")} text="Button 2"/>
      <MyButton action={() => imprimir("Button 3")} text="Button 3"/>
    </>
  )
}

export default App
