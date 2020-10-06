// useRef - для сохранения чего-либо между рендерами, если мы не хотим перерисовывать страницу
// useRef - для создания ссылок на DOM-элементы
// useRef - для программного создания фокуса на элементах DOM
// useRef - для сохранения предыдущего состояния useState

import React, { useState, useEffect, useRef } from 'react'

import './App.css'

// let renderCounter = 1 

function App() {
	const [inputValue, setInputValue] = useState('initial')
	const renderCounter = useRef(1)
	const inputRef = useRef(null)
	const prevState = useRef('')

	inputRef.current && console.log(inputRef.current.value)

	useEffect(() => {
		renderCounter.current++
	})

	useEffect(() => {
		prevState.current = inputValue
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
			<h2>Предыдущее состояние input {prevState.current}</h2>
			{/* <input value={inputValue} onChange={e => setInputValue(e.target.value)} /> */}
			<input ref={inputRef} value={inputValue} onChange={e => setInputValue(e.target.value)} />
			<button onClick={focus} className="btn btn-success">Фокус</button>
		</div>
	)
}

export default App