import ComponentB from "./ComponentB"

const ComponentA = ({text}: {text: string}) => {
  return (
    <>
    <h1>{text}</h1>
    <ComponentB text={text}/>
    </>
  )
}

export default ComponentA