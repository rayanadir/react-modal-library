import React from 'react'
import { ModalContent } from 'modal-library'
import 'modal-library/dist/index.css'
import PropTypes from 'prop-types';

const Modal = ({element, isShowing, toggle}) => {
  return (
      <ModalContent isShowing={isShowing} hide={toggle}> 
        {element}
      </ModalContent>
  )
}

Modal.propTypes={
  element: PropTypes.element
}

export default Modal
