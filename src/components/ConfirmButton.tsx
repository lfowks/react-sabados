import { showConfirm } from "../logica/funciones"

const ConfirmButton = ({text}:{text: string}) => {
  return (
    <button type="button" onClick={() => showConfirm(text)}>Confirm</button>
  )
}

export default ConfirmButton