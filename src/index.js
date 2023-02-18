const express = require('express');
const app = express();

app.get('/projects', (request, response) =>{
    response.json([
        "projeto1",
        "projeto2"

    ])
});

app.post('/projects', (request, response) =>{
    response.json([
        "projeto1",
        "projeto2",
        "projeto3",
    ])
});

app.put('/projects/:id', (request, response) =>{
    response.json([
        "projeto4",
        "projeto2",
        "projeto3",
    ])
});

app.delete('/projects/:id', (request, response) =>{
    response.json([
        "projeto4",
        "projeto2",
    ])
});

    app.listen(3000, () => {
        console.log('Server ativo porta 3000');
    });