import React from 'react'
import CreateDoc from './CreateDoc'
import Documents from './Documents'

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			showCreateDoc: false
		};
	}
	handleShowCreateDoc(){
		this.setState({
			showCreateDoc: !this.state.showCreateDoc
		});
	}
	render(){
		return (
			<div className="container">
				{
					this.state.showCreateDoc ?
						<CreateDoc handleShowCreateDoc={this.handleShowCreateDoc.bind(this)}/> :
							<Documents handleShowCreateDoc={this.handleShowCreateDoc.bind(this)}/>
				}
			</div>
		)
	}
}

export default App