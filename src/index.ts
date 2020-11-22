import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send('Deu certooo')
})

app.listen(3333)