var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var Repository = require('../models/Repository');
var Document = require('../models/Document');

var app = express();
var jsonParser = bodyParser.json();
var repository = new Repository();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
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

app.post('/createdoc', function(req, res) {
	if (!req.body) {return res.sendStatus(400)}
	var id = repository.getAllDocs().reduce(function(max, current) {
	  return current.id > max ? current.id: max;
	}, -1) * 1 + 1;
	var file = req.body.file;
	var text = req.body.text;
	var date = req.body.date;
	var user = '1';	
	repository.addDoc(new Document(id, file, text, date, user));
	res.sendStatus(200);
});

var port = 3000;

app.listen(port, function(error){
	if (error) throw error;
	console.log("Express сервер запущен на порту", port);
});