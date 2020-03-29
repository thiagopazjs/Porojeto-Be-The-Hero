const express = require ('express');

const app  = express ();

app.get('/', (request,response) => {
    return response.json( {
        evento: 'projeto be the hero ',
        desenvolvedor:'Thiago Paz'
    })
});

app.listen (3333);
