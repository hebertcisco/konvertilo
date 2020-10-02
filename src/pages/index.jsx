/***************************
 * Code created by Hebert Barros,
 * Under MIT license
 * https://github.com/tecnobert/konvertilo
 *****************************/

import { FormBases } from "../app/components/FormBases"

import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { yellow } from "@material-ui/core/colors"

function HomePanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="Homepanel"
      hidden={value !== index}
      id={`simple-Homepanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

HomePanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-Homepanel-${index}`
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  appbar: {
    background: yellow
  }
}))

export default function SimpleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="absolute" color='inherit'>
        <Tabs value={value} onChange={handleChange} aria-label="Bases tabs">
          <Tab label="Bin2Dec" {...a11yProps(0)} />
          <Tab label="Dec2Bin" {...a11yProps(1)} />
          <Tab label="Hex2Dec" {...a11yProps(2)} />
          <Tab label="Dec2Hex" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <HomePanel value={value} index={0}>
        <FormBases
          base1="bin"
          base2="dec"
          title={0}
          error_message="Enter either 0 or 1"
          placeholder="Enter 0 or 1"
        />
      </HomePanel>
      <HomePanel value={value} index={1}>
        <FormBases
          base1="dec"
          base2="bin"
          title={1}
          error_message="Enter a decimal number"
          placeholder="Enter decimal"
        />
      </HomePanel>
      <HomePanel value={value} index={2}>
        <FormBases
          base1="hex"
          base2="dec"
          title={2}
          error_message="Enter a hexadecimal number"
          placeholder="Enter hexadecimal"
        />
      </HomePanel>
      <HomePanel value={value} index={3}>
        <FormBases
          base1="dec"
          base2="hex"
          title={3}
          error_message="Enter either 0 or 1"
          placeholder="Enter 0 or 1"
        />
      </HomePanel>
    </div>
  )
}




















