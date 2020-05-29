import React from 'react'

import classes from './Card.module.scss'
import {ProductCounter} from 'Components/UI/ProductCounter'

export const Card = ({ product, selectProduct }) => {
  return (
      <div 
        className={classes.Card}>
        <img alt="example" src={product.image} />
        <h4>{product.name} </h4> 
        <h1>{product.price}₴</h1>

       {product.inCart
       ?
       <ProductCounter product={product}/>
       :
       <button 
        onClick={() => selectProduct(product)}>
          <i className="fas fa-shopping-cart"></i>  В корзину
       </button> }
      </div>
  )
}