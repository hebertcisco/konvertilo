/***************************
 * Code created by Hebert Barros,
 * Under MIT license
 * https://github.com/tecnobert/konvertilo
 *****************************/

import { blue, grey, red, yellow } from '@material-ui/core/colors'

import { makeStyles } from '@material-ui/core/styles'

const colors = {
  $primary: grey[900],
  $secondary: yellow[400],
  $border: '1px solid ' + grey[800],
  hover: {
    $primary: grey[900],
    $secondary: grey[50],
    $border: '1px solid ' + grey[600]
  }
}
const Styled = makeStyles(theme => ({
  body: {
    margin: 0,
    border: 0,
    fontFamily: 'IBMPlexMonoRegular'
  },
  h1: {
    fontFamily: 'IBMPlexMonoBold'
  },
  errorMessage: {
    color: red[500],
    fontFamily: 'IBMPlexMonoExtraLight'
  },
  StyledForm: {
    border: colors.$border,
    borderRadius: '5px',
    padding: '10px',
    width: '50%',
    background: colors.$secondary
  },
  Field: {
    display: 'flex',
    flexDirection: 'column'
  },
  Label: {
    margin: '10px',
    fontSize: '18px',
    fontFamily: 'IBMPlexMonoRegular',
    color: colors.$primary
  },
  BinaryTextInput: {
    width: '50%',
    fontSize: '18px',
    marginLeft: '10px',
    marginBottom: '10px',
    border: colors.$border,
    padding: '10px',
    fontFamily: 'IBMPlexMonoRegular',
    borderRadius: '2px',
    background: colors.$secondary,
    outline: 'none',
    color: colors.$primary,
    '&:focus': {
      border: colors.hover.$border
    }
  },
  DecimalTextInput: {
    width: '50%',
    fontSize: '18px',
    marginLeft: '10px',
    marginBottom: '10px',
    border: colors.$border,
    padding: '10px',
    fontFamily: 'IBMPlexMonoRegular',
    borderRadius: '2px',
    background: colors.$secondary,
    outline: 'none',
    color: colors.$primary
  },
  GithubLink: {
    color: colors.hover.$primary,
    '&:hover': {
      color: blue[400]
    }
  },
  Button: {
    width: '30%',
    marginBottom: '10px',
    marginLeft: '10px',
    padding: '10px',
    border: '1px solid',
    borderBottom: '4.5px solid',
    borderRadius: '12px',
    fontFamily: 'IBMPlexMonoRegular',
    fontSize: '18px',
    cursor: 'pointer',
    color: colors.$primary,
    '&:hover': {
      border: colors.hover.$border,
      color: colors.hover.$primary,
      borderBottom: '4.5px solid'
    },
    '&:active': {
      border: '1px solid'
    }
  },

  '@media screen and (max-width: 320px)': {
    StyledForm: {
      border: colors.$border,
      borderRadius: '5px',
      padding: '6px',
      width: '95%',
      background: colors.$secondary
    },
    Field: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
}))
export default Styled
