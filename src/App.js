//  useMemo кеширует те значения, которые не изменились и не вызывает их функции при новом рендере
//  useMemo кеширует объекты, т.к. новый рендер создает новый объект, даже с теми же значениями

import React, {useState, useMemo} from 'react'

import './App.css'

function complexCompute(num) {
	let i = 0
	while (i<100000000) i++
	console.log('Complex computed')
	return num * 2
}

const App = () => {
	const [number, setNumber] = useState(42)
	const [colored, setColored] = useState(false)

	const computed = useMemo(() => {
		return complexCompute( number )
	}, [number]) 

	const styles = useMemo(() => ({
			color: colored ? 'red' : 'darkblue'
		}), [colored]) 
	
	return (
		<div className="App">
			<h1 style={styles}>Вычисляемое свойство {computed}</h1>
			<button className="btn btn-success" onClick={() => setNumber(prev=>prev+1)}>Добавить</button>
			<button className="btn btn-info" onClick={() => setNumber(prev=>prev-1)}>Удалить</button>
			<button className="btn btn-danger" onClick={() => setColored(prev=>!prev)}>Изменить</button>
		</div>
	)
}

export default App