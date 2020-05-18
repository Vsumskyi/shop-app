import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Navigation.module.scss'

const links =  [
  {to:'/', label : 'Главная', exact: true},
  {to:'/cart', label: <i className="fas fa-shopping-basket"></i>, 
  exact: false, class: classes.cartLink, count:3}//redux
  ]

export const Navigation = () => {

  const  renderLinks = links => {
    return links.map((link, index)=> {
      return (
        <NavLink
          key={link.to}
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
          className={link.class}
        > 
        {link.label}{link.count? <span>{link.count}</span>: null}
        </NavLink>
     )
    })
  }

  return (
    <div className={classes.Navigation}>
        {renderLinks(links)}
    </div >
  )
}