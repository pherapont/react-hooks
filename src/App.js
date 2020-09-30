import React, { useState } from 'react'

import './App.css'

export default function App() {

	const [ type, setType ] = useState( 'users' )

	return (
		<div className="App mt-md-5">

			<h1 className="mb-md-3">Русурс {type}</h1>
			<button onClick={() => setType( 'users' )} className="btn btn-info mr-md-3">Пользователи</button>
			<button onClick={() => setType( 'todos' )} className="btn btn-success mr-md-3">Todo</button>
			<button onClick={() => setType( 'posts' )} className="btn btn-danger">Посты</button>
		</div>
	)
}
