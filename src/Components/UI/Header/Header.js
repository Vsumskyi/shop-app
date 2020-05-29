import React from 'react'

import classes from './Header.module.scss'

export const Header = ({ children }) => (
	<div className={classes.Header}>{children}</div>
)
