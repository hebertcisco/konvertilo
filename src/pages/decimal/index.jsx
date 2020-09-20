/***************************
 * Code created by Hebert Barros,
 * Under MIT license
 * https://github.com/tecnobert/konvertilo
 *****************************/

import React from "react"
import { FormBases } from "../../app/components/FormBases"
function BinaryMode() {

  return (
    <div className="body">
      <FormBases
        base1="decimal"
        base2="binary"
        title={0}
        error_message="Enter decimal numbers"
        placeholder="Enter decimal numbers"
      />
    </div>
  )
}

export default BinaryMode
