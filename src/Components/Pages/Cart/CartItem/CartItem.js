import React from 'react'

import classes from './CartItem.module.scss'

export const CartItem = ( { product, productsHandler } ) => {

  return (
    <div className={classes.CartItem}>
      <img src={product.image} alt={product.name} />
      <h3> {product.name}</h3>

      <div className={classes.btns}>
        <button 
          onClick={() => productsHandler(product.id, +1)}>
          <i className="fas fa-plus-circle"></i>
        </button>

        <strong>{product.count}</strong>

        <button 
        disabled={product.count <= 1? true: false}
          onClick={() => productsHandler(product.id, -1)}>
          <i className="fas fa-minus-circle"></i>
        </button>

        <button 
          onClick={() => productsHandler(product.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      <span>x {product.count * product.price}</span>
    </div>
  )

}
/* <i class="fas fa-shopping-basket"></i> */
