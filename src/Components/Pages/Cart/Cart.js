import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Cart.module.scss'
import { CartItem } from './CartItem/CartItem'

export const CartComponent = ({ cartItems, countPrice, price }) => {
	useEffect(() => {
		countPrice()
	})

	const renderProducts = () => (
		cartItems.map(item => <CartItem key={item.id} product={item} />)
	)
	
	return (
		<div className={classes.Cart}>
			{<div className={classes.products}>{renderProducts()}</div>}
			{cartItems.length < 1 ? (
				<p>
					Корзина пуста!
					<br />
					Вы можете продолжить покупки в&nbsp;
					<NavLink to={'/'}>каталоге товаров</NavLink>{' '}
				</p>
			) : (
				<div className={classes.calc}>
					<div>
						<span>
							Сумма: <h2>{price}</h2> грн
						</span>
					</div>
					<button>Купить сейчас</button>
				</div>
			)}
		</div>
	)
}
