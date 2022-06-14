import React from 'react'
import { ModalContent } from './ModalContent'
import PropTypes from 'prop-types';
import { useState } from "react";
import './styles.module.css'

export const Modal = ({element, isShowing, toggle}) => {
  return (
      <ModalContent isShowing={isShowing} hide={toggle}> 
        {element}
      </ModalContent>
  )
}

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

