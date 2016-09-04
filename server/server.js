var express = require('express');
var path = require('path');
var Repository = require('../models/Repository');

var app = express();
var repository = new Repository();

app.use(express.static('./dist'));

app.get('/', function(req, res){
	res.sendFile(path.resolve('client/index.html'));
});

app.get('/getalldocs', function(req, res) {
	res.json(repository.getAllDocs());
});

app.delete('/delete/:id', function(req, res) {
	var docId = req.params.id;
	repository.removeDoc(docId);
	res.json(repository.getAllDocs());
});

var port = 3000;

app.listen(port, function(error){
	if (error) throw error;
	console.log("Express сервер запущен на порту", port);
});