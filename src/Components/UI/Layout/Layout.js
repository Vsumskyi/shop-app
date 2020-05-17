import React from 'react'
import './Layout.scss'

export const Layout = ({ children, cls = '' }) => (
  <div className={ 'Layout ' + cls }> {children} </div>)