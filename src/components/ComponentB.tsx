import ComponentC from "./ComponentC"

const ComponentB = ({text, setNewText}:{text:string, setNewText:any}) => {
  return (
    <>
      <h2>{text}</h2>
      <ComponentC setNewText={setNewText} />
    </>
  )
}

export default ComponentB