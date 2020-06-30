import React from 'react'

import classes from './Card.module.scss'
import { ProductCounter } from 'Components/UI/ProductCounter'
//<i class="fas fa-star"></i>
export const Card = ({ product, selectProduct }) => {
  const rendenRating = rating => {
    return Array(rating)
      .fill(<i class='fas fa-star'></i>)
      .map((i, index) => <i className='fas fa-star' key={index}></i>)
  }

  return (
    <div className={classes.Card}>
      <img alt='example' src={product.image} />
      <h4>{product.name || 'Product'} </h4>
      <h1>{product.price}₴</h1>
      <div className={classes.rating}>{rendenRating(product.rating)}</div>
      {product.inCart ? (
        <ProductCounter product={product} inHome={true} />
      ) : (
        <button onClick={() => selectProduct(product)}>
          <i className='fas fa-shopping-cart'></i> В корзину
        </button>
      )}
    </div>
  )
}
