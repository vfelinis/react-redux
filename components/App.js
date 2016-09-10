import React from 'react'
import AllDocs from './AllDocs'
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
					this.state.showAddDoc ? <AddDoc handleShowAddDoc={this.handleShowAddDoc.bind(this)}/> : <AllDocs handleShowAddDoc={this.handleShowAddDoc.bind(this)}/>
				}			
			</div>
		)
	}
}

export default App