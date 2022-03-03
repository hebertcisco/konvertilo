import { app, urls } from "../../app/app.json"

import AppBar from "@material-ui/core/AppBar"
import React from "react"
import Styled from "../../styles/styles"
import Toolbar from "@material-ui/core/Toolbar"
import TranslateSharp from "@material-ui/icons/TranslateSharp"
import Typography from "@material-ui/core/Typography"
import GithubLink from "./github"

export default function Nav() {
  const classes = Styled()
  function toHome() {
    window.location.href = urls.routes[0]
  }
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.bgNav}>
        <Toolbar>
          <Typography
            onClick={toHome}
            className={classes.title}
            variant="h6"
            component='h1'
            noWrap
          >
            <TranslateSharp></TranslateSharp> {app.NAME}
          </Typography>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <GithubLink></GithubLink>
          </div>
          <div className={classes.sectionMobile}></div>
        </Toolbar>
      </AppBar>
      <div className={classes.root}></div>
    </div>
  )
}
