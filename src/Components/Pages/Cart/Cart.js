import React, { useState, useEffect } from 'react'

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
  const [countPrice, setCountPrice] = useState(0)

  useEffect(() => {
    countAll()
    // eslint-disable-next-line
  },[])

  const productsHandler = (id, count) => {
    if (count !== 'delete') {
    const cloned = [...products].map(i => {
      if (count === 'add' && i.id === id) {
        i.count += 1
       } else if (count === 'substract' && i.id === id) {
        i.count -= 1
       } 
       return i
    })
    setProducts(cloned)

  } else {
      setProducts(products.filter(i => i.id !== id))
    }
    countAll()
  }
  
  const countAll = () => {
    setCountPrice(products.reduce((acc,curr) => acc += curr.count * curr.price,0))
  }

  const renderProducts = () => (
      <div className={classes.products}>
       {products.map(item => (
          <CartItem 
            key={item.id}
            product={item} 
            productsHandler={productsHandler}
          />
        )
       )}
      </div>
    )

  return (
  <div className={classes.Cart}> 
    {renderProducts()}
    {products.length < 1 
      ?
      <h2>Корзина пуста</h2>
      :  
      <div className={classes.calc}>
        <div>
          <span>Сумма: <h2>{countPrice}</h2> грн</span>
        </div>
        <button>Купить сейчас</button>
      </div>
    }
  </div>
  )
}

