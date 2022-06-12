import React from 'react';
import ReactDOM from "react-dom";
import './index.css'

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
      </React.Fragment>
      ,
      document.body
    )
    : null;
}
