import React from 'react'
import GetAllDocs from './GetAllDocs'

class App extends React.Component{
	render(){
		return (
			<div>
				<h1>Ваши документы</h1>
				<GetAllDocs/>
			</div>
		)
	}
}

export default App