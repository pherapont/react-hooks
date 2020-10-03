import React, { useState, useEffect } from 'react'

import './App.css'

let renderCounter = 1

function App() {
	const [inputValue, setInputValue] = useState('initial')

	useEffect(() => {
		renderCounter++
	})

	// Следующие 4 строки загоняют программу в бесконченый цикл
	// const [renderCounter, setRenderCounter] = useState(1)
	// useEffect(() => {
	// 	setRenderCounter(prev => prev + 1)
	// }) 

	return (
		<div>
			<h1>Страница рендерилась {renderCounter} раз</h1>
			<input value={inputValue} onChange={e => setInputValue(e.target.value)} />
		</div>
	)
}

export default App