//Dependencias
const fetchData = require("../utils/fetch").fetchData;

//Variables
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => {
        console.log(`Nombre ${data.results[0].name}`);
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });