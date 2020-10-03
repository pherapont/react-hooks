// useRef - для сохранения чего-либо между рендерами, если мы не хотим перерисовывать страницу

import React, { useState, useEffect, useRef } from 'react'

import './App.css'

// let renderCounter = 1 

function App() {
	const [inputValue, setInputValue] = useState('initial')
	const renderCounter = useRef(1)

	useEffect(() => {
		renderCounter.current++
	})

	// Следующие 4 строки загоняют программу в бесконченый цикл
	// const [renderCounter, setRenderCounter] = useState(1)
	// useEffect(() => {
	// 	setRenderCounter(prev => prev + 1)
	// }) 

	return (
		<div>
			<h1>Страница рендерилась {renderCounter.current} раз</h1>
			<input value={inputValue} onChange={e => setInputValue(e.target.value)} />
		</div>
	)
}

export default App