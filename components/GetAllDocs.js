import React from 'react'

export default class GetAllDocs extends React.Component{
	constructor(){
		super();
		this.state = {
			documents: []
		}
	}
	componentDidMount(){
		var self = this;
		$.ajax({
			url: '/getalldocs',
			success: function(data){
				self.setState({
					documents: data
				});
			}
		});
	}

	render(){
		return (
			<div>
				<ul>
					{
						this.state.documents.map((doc) => {
							return <li key={doc.id}>{doc.text}</li>
						})
					}
				</ul>
			</div>
		)
	}
}