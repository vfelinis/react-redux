import React from 'react'
import ReactDom from 'react-dom'

class UpdateDoc extends React.Component{
	handleUpdateDoc(e){
		e.preventDefault();
		var doc = {
			id: this.props.document.id,
			file: this.props.document.file,
			text: ReactDom.findDOMNode(this.refs.text).value,
			date: ReactDom.findDOMNode(this.refs.date).value,
			user: this.props.document.user
		};
  		var self = this;
		$.ajax({
			url: '/updatedoc',
			type: 'PUT',
			data: doc,
			success: function(data){
				self.props.handleShowUpdateDoc();
			}
		});
	}
	render(){
		return (
			<div>
				<h1>Изменение документа</h1>
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-sm-2 control-label">Описание</label>
						<div className="col-sm-10">
							<input
							  type='text'
							  ref='text'
							  defaultValue={this.props.document.text}
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Дата</label>
						<div className="col-sm-3">
							<input
							  type='date'
							  ref='date'
							  defaultValue={this.props.document.date}
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-2">
							<button onClick={this.handleUpdateDoc.bind(this)} className="btn btn-default">Сохранить</button>
						</div>
					</div>
				</form>
				<button onClick={this.props.handleShowUpdateDoc} className="btn btn-default">
					Отменить
				</button>
			</div>
		)
	}
}

export default UpdateDoc