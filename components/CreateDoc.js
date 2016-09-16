import React from 'react'
import ReactDom from 'react-dom'

class CreateDoc extends React.Component{
	handleCreateDoc(e){
		e.preventDefault();
  		var formFile = ReactDom.findDOMNode(this.refs.file).value;
  		var formText = ReactDom.findDOMNode(this.refs.text).value;
  		var formDate = ReactDom.findDOMNode(this.refs.date).value;
  		var self = this;
		$.ajax({
			url: '/createdoc',
			type: 'POST',
			data: {
				file: formFile,
				text: formText,
				date: formDate,
				user: '1'
			},
			success: function(data){
				self.props.handleShowCreateDoc();
			}
		});
	}
	render(){
		return (
			<div>
				<h1>Создание нового документа</h1>
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-sm-2 control-label">Файл</label>
						<div className="col-sm-10">
							<input
							  type='text'
							  placeholder='Укажите файл'
							  ref='file'
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Описание</label>
						<div className="col-sm-10">
							<input
							  type='text'
							  placeholder='Укажите описание'
							  ref='text'
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Дата</label>
						<div className="col-sm-3">
							<input
							  type='date'
							  placeholder='Укажите дату'
							  ref='date'
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-2">
							<button onClick={this.handleCreateDoc.bind(this)} className="btn btn-default">
								Создать
							</button>
						</div>
					</div>
				</form>
				<button onClick={this.props.handleShowCreateDoc} className="btn btn-default">Отменить</button>
			</div>
		)
	}
}

export default CreateDoc