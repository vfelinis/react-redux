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
	render(){
		return (
			<div>
				<h1>Изменение документа</h1>
				<form>
					<input
					  type='text'
					  placeholder='Укажите файл'
					  ref='file'
					  defaultValue={this.props.document.file}
					/>
					<input
					  type='text'
					  placeholder='Укажите описание'
					  ref='text'
					  defaultValue={this.props.document.text}
					/>
					<input
					  type='date'
					  placeholder='Укажите дату'
					  ref='date'
					  defaultValue={this.props.document.date}
					/>
					<button onClick={this.handleUpdateDoc.bind(this)} className="btn btn-default">Сохранить</button>
				</form>
				<button onClick={this.props.handleShowUpdateDoc} className="btn btn-default">Отменить</button>			
			</div>
		)
	}
}

export default UpdateDoc