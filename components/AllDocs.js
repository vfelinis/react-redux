import React from 'react'
import GetDocs from './GetDocs'
import UpdateDoc from './UpdateDoc'

export default class AllDocs extends React.Component{
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
			document: doc ? doc : {}
		});
	}
	render(){
		return (
			<div>
				{
					this.state.showUpdateDoc ? <UpdateDoc document={this.state.document} handleShowUpdateDoc={this.handleShowUpdateDoc.bind(this)}/> : <GetDocs handleShowAddDoc={this.props.handleShowAddDoc} handleShowUpdateDoc={this.handleShowUpdateDoc.bind(this)}/>
				}
			</div>
		)
	}
}