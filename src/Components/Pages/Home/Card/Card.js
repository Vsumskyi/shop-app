import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

import classes from './Card.module.scss'

export const Card = ({ card }) => {
  const [isFlipped, setFlipped] = useState(false)

  const flippedHandler = () => {
      setFlipped(!isFlipped)
  }
  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div 
        className={classes.Card}
        onClick={flippedHandler}
      >
        <img alt="example" src={card.image} />
        <span>{card.name} </span> 
      </div>

      <div 
        className={classes.Card}
        onClick={flippedHandler}
      >
        <img alt="example" src={card.image} />
        <span>{card.price} </span> 
      </div>
    </ReactCardFlip>
  )
}