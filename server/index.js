const http = require('http');
const port = 35813;

const onRequest = require('./router');

const server = http.createServer(onRequest);

server.listen(port, (err) => {
	if (err) {
		console.log('ERROR: ', err)
	}

	console.log('server started at http://localhost:' + port)
});