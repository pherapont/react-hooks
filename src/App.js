// useRef - для сохранения чего-либо между рендерами, если мы не хотим перерисовывать страницу
// useRef - для создания ссылок на DOM-элементы
// useRef - для программного создания фокуса на элементах DOM

import React, { useState, useEffect, useRef } from 'react'

import './App.css'

// let renderCounter = 1 

function App() {
	const [inputValue, setInputValue] = useState('initial')
	const renderCounter = useRef(1)
	const inputRef = useRef(null)

	inputRef.current && console.log(inputRef.current.value)

	useEffect(() => {
		renderCounter.current++
	})

	const focus = () => {inputRef.current.focus()}

	// Следующие 4 строки загоняют программу в бесконченый цикл
	// const [renderCounter, setRenderCounter] = useState(1)
	// useEffect(() => {
	// 	setRenderCounter(prev => prev + 1)
	// }) 

	return (
		<div>
			<h1>Страница рендерилась {renderCounter.current} раз</h1>
			{/* <input value={inputValue} onChange={e => setInputValue(e.target.value)} /> */}
			<input ref={inputRef} value={inputValue} onChange={e => setInputValue(e.target.value)} />
			<button onClick={focus} className="btn btn-success">Фокус</button>
		</div>
	)
}

export default App