//Dependencias
const fetchData = require("../utils/fetch").fetchData;

//Variables
const API = 'https://rickandmortyapi.com/api/character/';

/**
 * Obtiene datos ASYNC
 */
const getData = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        console.log(`Nombre: ${data.results[0].name}`);
        const character = await fetchData(`${url_api}${data.results[0].id}`)
        console.log(character);
    } catch (e) {
        console.error(e);
    }
};

console.log("Before");
getData(API);
console.log("After");