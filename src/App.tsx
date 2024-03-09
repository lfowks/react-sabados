import { MyProvider } from "./HookUseContext/MyContextProvider"
import ComponentA from "./HookUseContext/components/ComponentA"
import ComponentD from "./HookUseContext/components/ComponentD"

function App() { 
  return (
    <>
      <MyProvider>
        <ComponentA/>
        <ComponentD/>
      </MyProvider>
    </>
  )
}

export default App
