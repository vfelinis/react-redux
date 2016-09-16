var express = require('express');
var path = require('path');
var Repository = require('../models/Repository');
var bodyParser = require('body-parser');
var Document = require('../models/Document');

var app = express();
var repository = new Repository();
var jsonParser = bodyParser.json();

app.use(express.static('./dist'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.sendFile(path.resolve('client/index.html'));
});

app.get('/getdocs', function(req, res) {
	res.json(repository.getAllDocs());
});

app.delete('/delete/:id', function(req, res) {
	var docId = req.params.id;
	repository.removeDoc(docId);
	res.sendStatus(200);
});

app.put('/updatedoc', function(req, res) {
	if (!req.body) {return res.sendStatus(400)}
	var doc = req.body;
	repository.updateDoc(doc);
	res.sendStatus(200);
});

app.post('/createdoc', function(req, res) {
	if (!req.body) {return res.sendStatus(400)}
	var maxId = repository.getAllDocs().reduce(function(max, current) {
	  return current.id > max ? current.id: max;
	}, -1);
	var newId = maxId + 1;
	var file = req.body.file;
	var text = req.body.text;
	var date = req.body.date;
	var user = req.body.user;	
	repository.addDoc(new Document(newId, file, text, date, user));
	res.sendStatus(200);
});

var port = 3000;

app.listen(port, function(error){
	if (error) throw error;
	console.log("Express сервер запущен на порту", port);
});