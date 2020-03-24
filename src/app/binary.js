/***************************
 * Code created by Hebert Barros,
 * Under MIT license
 * https://github.com/tecnobert/konvertilo
 *****************************/

import React, { useState } from "react"

import ArrowDownwardTwoTone from "@material-ui/icons/ArrowDownwardTwoTone"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"
import ComputerTwoTone from "@material-ui/icons/ComputerTwoTone"
import IconButton from "@material-ui/core/IconButton"
import Keyboard from "@material-ui/icons/Keyboard"
import Snackbar from "@material-ui/core/Snackbar"
import Styled from "../styles/styles"
import { titles } from "./app.json"

//import ArrowUpwardTwoTone from '@material-ui/icons/ArrowUpwardTwoTone'

function BinaryMode() {
  let classes = Styled()
  const [binaryText, setBinaryText] = useState("")
  const [decimalText, setDecimalText] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  // Perform the conversion on form submit
  const onFormSubmit = e => {
    e.preventDefault() // prevents refresh of the browser

    // Make sure we accept only either 0 or 1
    if (binaryText.match(/^[0-1]+$/g) === null) {
      setErrorMessage("Enter either 0 or 1")
      handleClick()
      return
    }

    setErrorMessage("") // Reset the error message

    // Formulae:
    // input = 1 => output = 1 * (2^0) = 1
    // input = 10 => output = (0 * (2^0)) + (1 * (2^1)) = 2
    // So we reverse and iterate from the back
    const reversedBinaryText = binaryText
      .split("")
      .map(Number) // Convert to a number from string
      .reverse()

    // Calculate the result by accumulating previous vaue
    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    )
    setDecimalText(result)
  }
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }
  return (
    <div className="body">
      <h1 className={classes.h1}>{titles[0]}</h1>

      <form className={classes.StyledForm} onSubmit={onFormSubmit}>
        {errorMessage && (
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={errorMessage}
            action={
              <React.Fragment>
                <Button color="secondary" size="small" onClick={handleClose}>
                  OK
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        )}
        <br />
        <div className={classes.Field}>
          <label className={classes.Label}>
            <Keyboard /> Binary Input
          </label>
          <div>
            <input
              className={classes.BinaryTextInput}
              autoComplete="off"
              type="text"
              name="binary"
              placeholder="Enter 0 or 1"
              value={binaryText}
              onChange={e => setBinaryText(e.target.value)}
            />
            <button className={classes.Button} type="submit">
              Convert
            </button>
          </div>
        </div>

        <ArrowDownwardTwoTone color="disabled"></ArrowDownwardTwoTone>

        <div className={classes.Field}>
          <label className={classes.Label}>
            <ComputerTwoTone /> Decimal Output
          </label>
          <input
            className={classes.DecimalTextInput}
            type="text"
            name="decimal"
            value={decimalText}
            disabled
          />
        </div>
      </form>
    </div>
  )
}

export default BinaryMode
