/***************************
 * Code created by Hebert Barros,
 * Under MIT license
 * https://github.com/tecnobert/konvertilo
 *****************************/

import BinaryMode from './app/binary'
import React from 'react'
import ReactDOM from 'react-dom'

//import DecimalMode from './app/decimal'
function App() {
  return (
    <div>
      <BinaryMode></BinaryMode>
      {/*<DecimalMode></DecimalMode>*/}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
