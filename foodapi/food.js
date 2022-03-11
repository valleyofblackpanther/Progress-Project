import express from 'express';
const app = express();
import fetch from 'node-fetch';

app.listen(3000, () => console.log('listening at 3000'));

app.use(express.static('publicc')); 

app.get('/food', async (request, response) =>  {
const api_url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=7e5eef21fb3645c8bc3ec43acdbbc719`
const fetch_response = await fetch(api_url);
const json = await fetch_response.json();
response.json(json); //proxy server.
});