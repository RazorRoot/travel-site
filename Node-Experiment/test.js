var filesYo = require('fs');
var https = require('https');

filesYo.writeFile(__dirname + "/index.html","<h1>HTML rocks</h1>");

var alienUrl = "https://cdn.pixabay.com/photo/2017/01/24/22/55/et-2006631_960_720.jpg";
var alienFile = filesYo.createWriteStream(__dirname + "/node-alien.jpg");
var request = https.get(alienUrl, function (response){
	response.pipe(alienFile);
});
