import React, { useEffect } from 'react'
import classes from './Cart.module.scss'
import { CartItem } from './CartItem/CartItem';

export const CartComponent = ({ cartItems, countPrice, price }) => {

  useEffect(() => {
    countPrice()
  },[countPrice])

  const renderProducts = () => (
      <div className={classes.products}>
       {cartItems.map(item => (
          <CartItem 
            key={item.id}
            product={item} 
          />
        )
       )}
      </div>
    )

  return (
  <div className={classes.Cart}> 
    {renderProducts()}
    {items.length < 1 
      ?
      <h2>Корзина пуста</h2>
      :  
      <div className={classes.calc}>
        <div>
          <span>Сумма: <h2>{price}</h2> грн</span>
        </div>
        <button>Купить сейчас</button>
      </div>
    }
  </div>
  )
}

