import React, {useState, useEffect} from 'react'

export default function ItemsList({getItems}) {
	const [items, setItems] = useState([])

	useEffect(() => {
		const newItems = getItems()
		setItems(newItems)
		console.log('Render!')
	}, [getItems])

	return (
		<>
			<ul>
				{items.map(item => <li key={item}>{item}</li>)}
			</ul>
		</>
	)
}