import { useContext } from 'react'
import MyContext from '../MyContext';
import ComponentC from './ComponentC';

const ComponentB = () => {
  const { text } = useContext(MyContext);
  
  return (
    <>
      <h1>{text}</h1>
      <ComponentC />
    </>
  )
}

export default ComponentB