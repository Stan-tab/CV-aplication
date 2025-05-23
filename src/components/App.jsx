import React, { useState } from 'react'
import "../style/App.css"
import CV from './CV'
import GetInfo from './GetInfo'

function App() {
	const [prop, setProp] = useState({
		name: null,
		mail: null,
		phone:  null,
		edu: {
			id1: {
				name: "Best univercity",
				field: "CS",
				position: "Ohayo",
				date: [],
				responcibilities: "",
			}
		},
		work: {
			id1: {
				name: "Best job",
				field: "CS",
				position: "Ohayo",
				date: [],
				responcibilities: "",
			}
		}
	})

	return (
		<>
		<GetInfo setProp={setProp} prop={prop} />
		<CV prop={prop} />
		</>
	)
}

export default App
