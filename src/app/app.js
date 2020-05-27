/***************************
 * Code created by Hebert Barros,
 * Under MIT license
 * https://github.com/tecnobert/konvertilo
 *****************************/

import BinaryMode from "./binary"
import { Container } from "@material-ui/core"
import Nav from "./shared/nav"
import React from "react"

//import DecimalMode from './decimal'
function App() {
  return (
    <>
      <Container>
        <Nav></Nav>
        <BinaryMode></BinaryMode>

        {/*<DecimalMode></DecimalMode>*/}
      </Container>
    </>
  )
}
export default App
