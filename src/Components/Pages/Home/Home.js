import React from 'react'

import { Card } from './Card/Card'
import { Layout } from 'Components/UI/Layout/Layout'

export const HomeComponent = ( {  ...rest } ) => {
  const renderCards = () =>  (
    <>
      {rest.cardList.map(item => 
         <Card 
            selectProduct={rest.selectProduct}
            product={item} 
            count={item.count}
            key={item.id} />)}
    </>
   )

  return (
     <Layout cls='flexStart'>
      {renderCards()}
     </Layout >
    )
}