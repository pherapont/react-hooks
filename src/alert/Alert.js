import React from 'react'
import {useAlert} from './AlertContext'

function Alert() {

	const alert = useAlert()

	if (!alert.visible) return null

	return (
		<div onClick={alert.toggle} className={'alert alert-danger'}>
			Это очень и очень важное сообщение
		</div>
	)
}

export default Alert
