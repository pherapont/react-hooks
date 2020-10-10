import React from 'react'

import Main from './Main'
import {AlertProvider} from './alert/AlertContext'
import Alert from './alert/Alert'

function App() {
		
	return (
		<AlertProvider value={alert}>
			<div className={'container pt-3'}>
				<Alert />
				<Main toggle={() => {}} />
			</div>
		</AlertProvider>
	)
}

export default App
