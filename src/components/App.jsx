import React, { useState } from 'react'
import "../style/App.css"
import CV from './CV'
import GetInfo from './GetInfo'

function App() {
	const [prop, setProp] = useState({
		name: null,
		mail: null,
		phone:  null,
		edu: [],
		work: []
	})

	return (
		<>
		<GetInfo setProp={setProp} prop={prop} />
		<CV prop={prop} />
		</>
	)
}

export default App
