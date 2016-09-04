var Document = function(id, file, text, date, user){
	this.id = id;
	this.file = file;
	this.text = text;
	this.date = date;
	this.user = user;
};

module.exports = Document;