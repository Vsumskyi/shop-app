import React from 'react'
import classes from './ProductCounter.module.scss'

export const ProductCounterComponent = ( { product, plusProduct, minusProduct, deleteProduct }) => {

  return (
    <div className={classes.ProductCounter}>
    <button 
      onClick={() => plusProduct(product.id)}>
      <i className="fas fa-plus-circle"></i>
    </button>

    <strong>{product.count}</strong>

    <button 
      disabled={product.count <= 1}
      onClick={() => minusProduct(product.id)}>
      <i className="fas fa-minus-circle"></i>
    </button>

    <button 
      onClick={() => deleteProduct(product.id)}>
      <i className="fas fa-trash-alt"></i>
    </button>

    <span>x {product.count * product.price}</span>

  </div>
  )
}