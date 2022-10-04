const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))

app.get('/', (req, res) => {
	res.send('All posts')
});

app.get('/posts', (req, res) => {
	res.send('All posts')
});

app.get('/post', (req, res) => {
	res.send('Get a posts')
});

app.post('/post', (req, res) => {
	res.send('Create a posts')
});

app.put('/post', (req, res) => {
	res.send('Update a posts')
});

app.delete('/post', (req, res) => {
	res.send('Delete a posts')
});