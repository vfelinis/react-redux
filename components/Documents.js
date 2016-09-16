import React from 'react'
import UpdateDoc from './UpdateDoc'
import GetDocs from './GetDocs'

class Documents extends React.Component{
	constructor(){
		super();
		this.state = {
			showUpdateDoc: false,
			document: {}
		};
	}
	handleShowUpdateDoc(doc){
		this.setState({
			showUpdateDoc: !this.state.showUpdateDoc,
			document: doc
		});
	}
	render(){
		return (
			<div>
				{
					this.state.showUpdateDoc ?
						<UpdateDoc document={this.state.document} handleShowUpdateDoc={this.handleShowUpdateDoc.bind(this)}/> :
							<GetDocs handleShowCreateDoc={this.props.handleShowCreateDoc} handleShowUpdateDoc={this.handleShowUpdateDoc.bind(this)}/>
				}
			</div>
		)
	}
}

export default Documents