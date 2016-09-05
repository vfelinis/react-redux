import React from 'react'

export default class GetAllDocs extends React.Component{
	constructor(){
		super();
		this.state = {
			documents: []
		};
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
	update(docId){
		console.log(docId);
	}
	remove(docId){
		var self = this;
		$.ajax({
			url: '/delete/'+docId,
			type: 'DELETE',
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
				<h1>Ваши документы</h1>
				<button onClick={this.props.handleShowAddDoc} className="btn btn-lg btn-default">Создать новый документ</button>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Файл</th>
							<th>Описание</th>
							<th>Дата</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
							{
								this.state.documents.map((doc) => {
									return (
										<tr key={doc.id}>
											<td>{doc.file}</td>
											<td>{doc.text}</td>
											<td>{doc.date}</td>
											<td>
												<button onClick={this.update.bind(this, doc.id)} className="btn btn-xs btn-primary">
								                    Изменить
								                </button>
											</td>
											<td>
												<button onClick={this.remove.bind(this, doc.id)} className="btn btn-xs btn-primary">
								                    Удалить
								                </button>
											</td>
										</tr>
									)
								})
							}
					</tbody>
				</table>
			</div>
		)
	}
}