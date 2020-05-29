import React from 'react'

import classes from './CartItem.module.scss'
import { ProductCounter } from 'Components/UI/ProductCounter'

export const CartItem = ( { product } ) => (
    <div className={classes.CartItem}>
      <img src={product.image} alt={product.name} />
      <h3> {product.name}</h3>

      <ProductCounter product={product} count={product.count}/>

    </div>
  )

