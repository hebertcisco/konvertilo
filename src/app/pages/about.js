/***************************
 * Code created by Hebert Barros,
 * Under MIT license
 * https://github.com/tecnobert/konvertilo
 *****************************/

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Nav from "../shared/nav"
import React from "react"
import Styled from "../../styles/styles"
import { Typography } from "@material-ui/core"

function About() {
  const classes = Styled()

  return (
    <Container>
      <Nav></Nav>
      <Container className={classes.about}>
        <Grid item xs={6}>
          <Typography variant="h4" component="h4" gutterBottom>
            Binary converter
          </Typography>
          <Typography variant="p" component="p" gutterBottom>
            A ideia de fazer um app que converta binário para decimal é um tanto
            nostáugica e exitante, pelo menos para os devs que amam de verdade
            programação e codificação.
            
          </Typography>
         
        </Grid>
      </Container>
    </Container>
  )
}
export default About
