import React from 'react'
import GetAllDocs from './GetAllDocs'
import AddDoc from './AddDoc'

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			showAddDoc: false
		};
	}
	handleShowAddDoc(){
		this.setState({
			showAddDoc: !this.state.showAddDoc
		});
	}
	render(){
		return (
			<div className="container">
				{
					this.state.showAddDoc ? <AddDoc handleShowAddDoc={this.handleShowAddDoc.bind(this)}/> : <GetAllDocs handleShowAddDoc={this.handleShowAddDoc.bind(this)}/>
				}			
			</div>
		)
	}
}

export default App