import React, { useState, useEffect } from 'react'

import './App.css'

export default function App() {
	
	// Следующие 4 строки загоняют программу в бесконченый цикл
	const [renderCounter, setRenderCounter] = useState(1)
	useEffect(() => {
		setRenderCounter(prev => prev + 1)
	}) 

	return (
		<div>
			<h1>Страница рендерилась {renderCounter} раз</h1>
		</div>
	)
}