import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.jsx';
import Test from './Test'
import useModal from './useModal'

function App () {
    const { isShowing, toggle } = useModal()
    return(
        <React.Fragment>
            <button onClick={toggle}>Show Modal</button>
            <Modal element={<Test />} isShowing={isShowing} toggle={toggle}/>
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
