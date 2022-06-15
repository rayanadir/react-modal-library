# modal-library

> react modal library

[![NPM](https://img.shields.io/npm/v/modal-library.svg)](https://www.npmjs.com/package/modal-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-modal-library-rayan-dahmena
```

## Usage

In your `App.jsx` file

```jsx
import React from "react"

import { Modal, useModal } from "react-modal-library-rayan-dahmena"

//Create your own component modal content
import MyComponentContent from " *your path* "

const App = () => {

  // Declare useModal hook
  const { isShowing, toggle } = useModal();

  return (
    <div>
      <button onClick={toggle}>Open Modal</button>
      <Modal element={<MyComponentContent />} isShowing={isShowing} toggle={toggle}/>
    </div>
  )
} 

```

`MyComponentContent.jsx` file
```jsx
import React from "react"

const MyComponentContent = () => {
  return(
    <div>
      My modal content
    </div>
  )
}

export default MyComponentContent
```


## License

MIT © [rayanadir](https://github.com/rayanadir)
