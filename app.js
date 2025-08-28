const express = require('express');

const app = express();

// what is POST, GET, PUT, DELETE
//endpoint

app.use(express.json());
app.get('/', (req, res)=>{
	res.status(200).send('Hello World from Express.js');
})
//post -GET, POST, PUT, DELETE
app.post('/', (req, res)=>{
	const {firstName, lastName} = req.body;
	const message = `His full name is ${firstName} ${lastName}`;
	res.send(message);
})

app.delete('/:id', (req, res)=>{
	const {id} = req.params;
	res.send(id);
})
app.put('/:id', (req, res)=>{
	const {id} = req.params;
	const body = req.body;

	res.json({id, body})
})
const PORT = 8080
app.listen(PORT, () => console.log(`Listening on port -http://localhost:${PORT}` ));

// domain port endpoint
// http://localhost:8080/posts
