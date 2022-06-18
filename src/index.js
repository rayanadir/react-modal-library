import React, { useState } from 'react'
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

/**
 * useModal hook
 * @returns object {isShowing, toggle}
 */
export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false); 
  const toggle = () => {
      setIsShowing(!isShowing)
  }
  return { isShowing, toggle }
}

Modal.propTypes={
  element: PropTypes.element,
  isShowing: PropTypes.bool,
  toggle: PropTypes.func,
}

