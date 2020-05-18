import React from 'react'

import classes from './CartItem.module.scss'

export const CartItem = ( { product, productsHandler } ) => (
    <div className={classes.CartItem}>
      <img src={product.image} alt={product.name} />
      <h3> {product.name}</h3>

      <div className={classes.btns}>
        <button 
          onClick={() => productsHandler(product.id, 'add')}>
          <i className="fas fa-plus-circle"></i>
        </button>

        <strong>{product.count}</strong>

        <button 
          disabled={product.count <= 1}
          onClick={() => productsHandler(product.id, 'substract')}>
          <i className="fas fa-minus-circle"></i>
        </button>

        <button 
          onClick={() => productsHandler(product.id, 'delete')}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      <span>x {product.count * product.price}</span>
    </div>
  )

