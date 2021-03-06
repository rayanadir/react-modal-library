import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

/**
 * The content of the modal
 * @param {boolean} isShowing
 * @param {function} hide
 * @param {any} props
 * @returns JSX element, the content of the modal 
 */
export const ModalContent = ({ isShowing, hide, ...props }) => {
  return isShowing ?
    ReactDOM.createPortal(
      <React.Fragment>
        <div className='modal-overlay'>
          <section className='modal'>
            <button onClick={hide} className="modal-close-btn" type='button'>
              <span className='icon'>&#x2715;</span>
            </button>
            <div className='modal-body'>{props.children}</div>
          </section>
        </div>
        <style>
          {`
          .modal-overlay {
            position: fixed; 
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 1040;
            background-color: rgba(0, 0, 0, 0.5);
          }
          .modal {
            z-index: 100;
            background: #fff;
            position: relative;
            margin: auto;
            border-radius: 5px;
            max-width: 500px;
            width: 80%;
            top: 37%;
          }
          .modal-close-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 32px;
            width: 32px;
            font-size: 1.4rem;
            font-weight: 700;
            cursor: pointer;
            position: absolute;
            right: 0;
            border-radius:16px;
            border: 0;
            background-color: transparent;
          }
          .modal-body{
            padding: 2rem;
          }
          .icon{
            font-size: 18px;
            height: 18px;
            display: flex;
            align-items: center;
          }
  `}
        </style>
      </React.Fragment>
      ,
      document.body
    )
    : null;
}

ModalContent.propTypes={
  isShowing: PropTypes.bool,
  hide: PropTypes.func,
  props: PropTypes.any,
}