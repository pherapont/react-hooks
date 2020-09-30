import React, { useState, useEffect } from 'react'

import './App.css'

export default function App() {

	const [ type, setType ] = useState( 'users' )
	const [ data, setData ] = useState ( [] )

	console.log(data)

	// useEffect(() => {
	// 	console.log('render')
	// })

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/` + type)
		.then(response => response.json())
		.then(json => setData(json))
	}, [type])

	return (
		<div className="App mt-md-5">

			<h1 className="mb-md-3">Русурс {type}</h1>
			<button onClick={() => setType( 'users' )} className="btn btn-info mr-md-3">Пользователи</button>
			<button onClick={() => setType( 'todos' )} className="btn btn-success mr-md-3">Todo</button>
			<button onClick={() => setType( 'posts' )} className="btn btn-danger">Посты</button>

			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
