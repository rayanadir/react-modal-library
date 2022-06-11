import React from 'react'
import useModal from './useModal'
import { ModalContent } from 'modal-library'
import 'modal-library/dist/index.css'

const Modal = () => {
  const { isShowing, toggle } = useModal()
  return (
    <div>
      <button onClick={toggle}>Show modal</button>
      <ModalContent isShowing={isShowing} hide={toggle}> 
        Modal content
      </ModalContent>
    </div>
  )
}
export default Modal
