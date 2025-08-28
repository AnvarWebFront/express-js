require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const postModel = require('./models/post.model')
const app = express();

// what is POST, GET, PUT, DELETE
//endpoint

app.use(express.json());
app.get('/', async (req, res)=>{
	try {
		const allPost = await postModel.find();
		res.status(200).json(allPost);
	} catch (error) {
		res.status(500).json(error)
	}
	
})
//post -GET, POST, PUT, DELETE
app.post('/', async (req, res)=>{
	try {
		const {title, body} = req.body;
	const newPost = await postModel.create({title, body})
	res.status(201).json(newPost);
	} catch (error) {
		res.status(500).json(error)
	}
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


const PORT = process.env.PORT || 8080;


const bootstrap = async ()=>{
	try {
		await mongoose.connect(process.env.DB_URL).then(()=>console.log('DB connected'));
		app.listen(PORT, () => console.log(`Listening on port -http://localhost:${PORT}` ));
	} catch (error) {
		console.log(`Cannot connect to DB -${error}` );
	}
}
bootstrap();

// domain port endpoint
// http://localhost:8080/posts
