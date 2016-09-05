import React from 'react'
import ReactDom from 'react-dom'

class AddDoc extends React.Component{
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
				date: formDate
			},
			success: function(data){
				self.props.handleShowAddDoc();
			}
		});
	}
	render(){
		return (
			<div className="container">
				<h1>Новый документ</h1>
				<form>
					<input
					  type='text'
					  placeholder='Укажите файл'
					  ref='file'
					/>
					<input
					  type='text'
					  placeholder='Укажите описание'
					  ref='text'
					/>
					<input
					  type='date'
					  placeholder='Укажите дату'
					  ref='date'
					/>
					<button onClick={this.handleCreateDoc.bind(this)} className="btn btn-default">Создать</button>
				</form>
				<button onClick={this.props.handleShowAddDoc} className="btn btn-default">Отменить</button>
			</div>
		)
	}
}

export default AddDoc