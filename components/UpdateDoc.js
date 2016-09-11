import React from 'react'
import ReactDom from 'react-dom'

class UpdateDoc extends React.Component{
	handleUpdateDoc(e){
		e.preventDefault();
		var doc = {
			id: this.props.document.id,
			file: ReactDom.findDOMNode(this.refs.file).value,
			text: ReactDom.findDOMNode(this.refs.text).value,
			date: ReactDom.findDOMNode(this.refs.date).value,
			user: '1'
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
	handleCancel(e){
		e.preventDefault();
		this.props.handleShowUpdateDoc();
	}
	render(){
		return (
			<div>
				<h1>Изменение документа</h1>
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-sm-2 control-label">Файл</label>
						<div className="col-sm-10">
							<input
							  type='text'
							  ref='file'
							  defaultValue={this.props.document.file}
							  className="form-control"
							/>
						</div>
					</div>
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
						<div className="col-sm-2">
							<button onClick={this.handleCancel.bind(this)} className="btn btn-default">Отменить</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default UpdateDoc