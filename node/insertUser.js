// JavaScript source code
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var user = new User("12345", "Mark", "password");
  dbo.collection("users").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted" + res);
    db.close();
  });
});


function User(userID, name, password) {
	this.userID = userID;
	this.name = name;
	this.password = password;
}