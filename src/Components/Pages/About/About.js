import React from 'react'

import classes from './About.module.scss'
import {Layout} from 'Components/UI/Layout/Layout'

export const About = () => ( 
<Layout cls={'flexCenter'}>
  <div className={classes.About}>
    <h1>Самый лучший магаз в мире!</h1>
  </div>
</Layout>)