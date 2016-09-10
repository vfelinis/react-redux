import React from 'react'

class UpdateDoc extends React.Component{

	render(){
		return (
			<div>
				<h1>Изменение документа</h1>
				<form>
					<input
					  type='text'
					  placeholder='Укажите файл'
					  ref='file'
					  value={this.props.document.file}
					/>
					<input
					  type='text'
					  placeholder='Укажите описание'
					  ref='text'
					  value={this.props.document.text}
					/>
					<input
					  type='date'
					  placeholder='Укажите дату'
					  ref='date'
					  value={this.props.document.date}
					/>
				</form>
				<button onClick={this.props.handleShowUpdateDoc} className="btn btn-default">Отменить</button>			
			</div>
		)
	}
}

export default UpdateDoc