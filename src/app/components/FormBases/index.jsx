import ArrowDownwardTwoTone from "@material-ui/icons/ArrowDownwardTwoTone"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"
import ComputerTwoTone from "@material-ui/icons/ComputerTwoTone"
import IconButton from "@material-ui/core/IconButton"
import Keyboard from "@material-ui/icons/Keyboard"
import Snackbar from "@material-ui/core/Snackbar"
import React, { useState } from "react"
import { allYour } from "mathbases"
import Styled from "../../../styles/styles"
import { titles } from "../../app.json"
import CapitalizedText from "../CapitalizedText"

export const FormBases = ({
  base1,
  base2,
  title,
  error_message,
  placeholder
}) => {
  let classes = Styled()
  const [baseText, setBaseText] = useState("")
  const [base2Text, setBase2Text] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const onFormSubmit = (e) => {
    e.preventDefault()

  /*  if (baseText.match(/^[0-1]+$/g) === null) {
      setErrorMessage(error_message)
      handleClick()
      return
    }
*/
    setErrorMessage("")

    setBase2Text(allYour(base1).areBelongTo(base2)(baseText))
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
    <>
      <h1 className={classes.h1}>
        <CapitalizedText text={titles[title]} />
      </h1>
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
            <Keyboard />
            <CapitalizedText text={`${base1} Input`} />
          </label>
          <div>
            <input
              className={classes.BaseTextInput}
              autoComplete="off"
              type="text"
              name="binary"
              placeholder={placeholder}
              value={baseText}
              onChange={(e) => setBaseText(e.target.value)}
            />
            <button className={classes.Button} type="submit">
              Convert
            </button>
          </div>
        </div>

        <ArrowDownwardTwoTone color="disabled"></ArrowDownwardTwoTone>

        <div className={classes.Field}>
          <label className={classes.Label}>
            <ComputerTwoTone />
            <CapitalizedText text={`${base2} Output`} />
          </label>
          <input
            className={classes.Base2TextInput}
            type="text"
            name="decimal"
            value={base2Text}
            disabled
          />
        </div>
      </form>
    </>
  )
}
