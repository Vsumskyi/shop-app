import React, { useState } from 'react'

import classes from './Cart.module.scss'
import { CartItem } from './CartItem/CartItem';

const data = [
  {
     id: 1,
     name: "шарик",
     image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
     price: 15,
     count: 1
  },
  {
     id: 2,
     name: "футболка",
     image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
     price: 15,
     count: 1
  },
  {
     id: 4,
     name: "шарик 2",
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
     price: 15,
     count: 1
  },
  
]

export const Cart = () => {
 
  const [products, setProducts] = useState(data)

  const productsHandler = (id, count) => {
    let cloned = [...products].map(i => {
      if (i.id === id ) {
        i.count += count
      }
      return i
    })
    setProducts(cloned)

    if (!count) {
      setProducts([...products].filter(i => i.id !== id))
    }
  }

  const countAll = () => {
    let res = 0;
    [...products].forEach(i => res += (i.count * i.price))
   return res
  }

  const renderProducts = () => {
    return (
      <div className={classes.products}>
       {products.map(item => {
         return (
             <CartItem 
                key={item.id}
                product={item} 
                productsHandler={productsHandler}
              />
           )
       })}
      </div>
    )
   }

  return (
  <div className={classes.Cart}> 
    {renderProducts()}
    {products.length < 1 
      ?
      <h2>Корзина пуста</h2>
      :  
      <div className={classes.calc}>
        <div>
          <span>Сумма: <h2>{countAll()}</h2> грн</span>
        </div>
        <button>Купить сейчас</button>
      </div>
    }
  </div>
  )
}

