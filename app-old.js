
const http = require('http');


http.createServer( (req, res) => {

	res.writeHead(200, {'Content-Type': 'application/json'})

	let salida = {
		nombre: 'Franco',
		edad: 24,
		url: req.url
	}

	res.write(JSON.stringify(salida));
	res.end();

})
.listen(8080);


console.log('listen in port 8080')