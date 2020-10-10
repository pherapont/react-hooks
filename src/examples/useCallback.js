//  useCallback нужен чтобы функция не изменялась во время нового рендера если не изменились нужные нам параметры
//  В отличии от useMemo возврщает именно тело функции, а не результат ее работы

import React, {useState, useCallback} from 'react'
import ItemsList from './itemsList'

import './App.css'

const App = () => {
	const [colored, setColored] = useState(false)
	const [count, setCount] = useState(1)

	const styles = {
		color: colored ? 'green' : 'black'
	}

	const generateItemsFromAPI = useCallback(() => {
		return new Array(count).fill('').map((_, i)  => `Элемент ${i + 1}`)
	}, [count])

	return (
		<div className="App">
			<h1 style={styles}>Количество элементов : {count}</h1>
			<button className="btn btn-success" onClick={() => setCount(prev=>prev+1)}>Добавить</button>
			<button className="btn btn-warning" onClick={() => setColored(prev=>!prev)}>Изменить</button>

			<ItemsList getItems={generateItemsFromAPI}/>
		</div>
	)
}

export default App