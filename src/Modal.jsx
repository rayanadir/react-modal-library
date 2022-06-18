import React from 'react'
import { ModalContent } from './ModalContent'
import PropTypes from 'prop-types';

/**
 * Modal component
 * @param {JSX} element
 * @param {boolean} isShowing
 * @param {function} toggle 
 * @returns Modal
 */
 export const Modal = ({element, isShowing, toggle}) => {
  return (
      <ModalContent isShowing={isShowing} hide={toggle}> 
        {element}
      </ModalContent>
  )
}

Modal.propTypes={
  element: PropTypes.element,
  isShowing: PropTypes.bool,
  toggle: PropTypes.func,
}

export default Modal