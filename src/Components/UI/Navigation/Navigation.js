import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Navigation.module.scss'

export const NavigationComponent = ({ cartItemsCount, loading }) => {
	const links = [
		{ to: '/', label: 'Главная', exact: true },
		{ to: '/about', label: 'О нас', exact: true},
		{
			to: '/cart',
			label: <i className="fas fa-shopping-cart"></i>,
			exact: false,
			class: classes.cartLink,
			count: cartItemsCount
		}
	]

	const renderLinks = links => 
		links.map((link, index) => (
				<NavLink
					key={link.to}
					to={loading ? '/' : link.to}
					exact={link.exact}
					activeClassName={classes.active}
					className={`${link.class} ${loading ? classes.disable : ''}`}>
					{link.label}
					{link.count ? <span>{link.count}</span> : null}
				</NavLink>
			)
		)

	return <div className={classes.Navigation}>{renderLinks(links)}</div>
}
