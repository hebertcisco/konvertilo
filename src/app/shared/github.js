/***************************
 * Code created by Hebert Barros,
 * Under MIT license
 * https://github.com/tecnobert/konvertilo
 *****************************/

import GitHub from '@material-ui/icons/GitHub'
import Link from '@material-ui/core/Link'
import React from 'react'
import Styled from '../../styles/styles'
import { urls } from '../../app/app.json'

function GithubLink() {
    let classes = Styled()
  return (
    <Link href={urls.github}>
      <GitHub className={classes.GithubLink}></GitHub>
    </Link>
  )
}

export default GithubLink
