/***************************
 * Code created by Hebert Barros,
 * Under MIT license
 * https://github.com/tecnobert/konvertilo
 *****************************/

import React from "react"
import { FormBases } from "../app/components/FormBases"
function BinaryMode() {

  return (
    <div className="body">
      <FormBases
        base1="bin"
        base2="dec"
        title={0}
        error_message="Enter either 0 or 1"
        placeholder="Enter 0 or 1"
      />
    </div>
  )
}

export default BinaryMode
