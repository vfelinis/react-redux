var Document = require('./Document');

var Repository = function(){
	this.Documents = [
		new Document('1', 'file.txt', 'Текстовый файл', '2016-09-04', '1'),
		new Document('2', 'file.jpg', 'Графический файл', '2016-08-03', '1'),
		new Document('3', 'file.mp3', 'Аудио файл', '2016-07-25', '1')
	];
	this.getAllDocs = function(){
		return this.Documents;
	};
	this.addDoc = function(doc){
		this.Documents.push(doc);
	};
	this.removeDoc = function(docId){
		this.Documents.forEach(function(element, index, array){
			if (element.id == docId) {
				array.splice(index, 1);
			}
		});
	};
	this.updateDoc = function(doc){
		this.Documents.forEach(function(element, index, array){
			if (element.id == doc.id) {
				array[index] = doc;
			}
		});
	};
};

module.exports = Repository;