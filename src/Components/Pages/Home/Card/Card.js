import React from 'react'

import classes from './Card.module.scss'
import {ProductCounter} from 'Components/UI/ProductCounter'

export const Card = ({ product, selectProduct }) => {
  return (
      <div 
        className={classes.Card}>
        <img alt="example" src={product.image} />
        <span>{product.name} </span> 
        <span>{product.count}</span>

       {product.inCart
       ?
       <ProductCounter product={product}/>
       :
       <button onClick={() => selectProduct(product)}>В корзину</button> }
      </div>
  )
}