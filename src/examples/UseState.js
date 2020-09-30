import React, {useState} from 'react';

import './App.css';

function computeInitialCounter() {
	console.log('Some calculation...')
	return  Math.trunc( Math.random() * 20)
}

function App() {

	// let [counter, setCounter] = useState(1)
	// const [counter, setCounter] = useState(computeInitialCounter())
	const [counter, setCounter] = useState(() => {
		return computeInitialCounter()
	})
	
	function increment() { 
		setCounter((prevCounter) => {
			return prevCounter + 1
		}) 
		setCounter( p => p + 1 )
	}
		
	

	function decrement () {
		setCounter( counter - 1 )
	}

	return (
		<div className="App">
			<h1 className="mt-md-3">Счетчик: {counter}</h1>
			<button onClick={increment} className="btn btn-success mr-md-3">Добавить</button>
			<button onClick={decrement} className="btn btn-danger">Удалить</button>
		</div>
	);
}

export default App;
