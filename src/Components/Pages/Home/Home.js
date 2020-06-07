import React, { useEffect } from 'react'

import { Card } from './Card/Card'
import { Layout } from 'Components/UI/Layout/Layout'
import { Loader } from 'Components/UI/Loader/Loader'

export const HomeComponent = ({
	getProducts,
	loading,
	cardList,
	selectProduct
}) => {
	useEffect(() => {
		!cardList.length && getProducts()
		// eslint-disable-next-line
	}, [])

	const renderCardList = () =>
		cardList.map(item => (
			<Card
				selectProduct={selectProduct}
				product={item}
				count={item.count}
				key={item.id}
			/>
		))

	const renderCards = () => <>{!loading ? renderCardList() : <Loader />}</>

	return <Layout cls="flexStart">{renderCards()}</Layout>
}
