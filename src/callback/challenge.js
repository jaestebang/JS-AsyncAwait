//Dependencias
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//Variables
const API = 'https://rickandmortyapi.com/api/character/';

/**
 * Realiza llamado a la API y retorna datos
 * @param {string} url_api URL
 * @param {function} callback Función callback
 */
function fetchData(url_api, callback) {
    // Instancia del Request
    let xhttp = new XMLHttpRequest();

    // Invocamos el método GET asíncrono
    xhttp.open('GET', url_api, true);

    // Función que se ejecutará cuando el objeto XMLHttpRequest cambie de estado
    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === xhttp.DONE) {

            //Invocamos callback
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                return callback(new Error('Error: ' + url_api), null);
            }
        }
    }
    // por ultimo enviamos la peticion
    xhttp.send();
}

//Invocamos llamada a la API y definimos función callback
fetchData(API, (error, data) => {
    if (error) console.log(`Fallo ${error}`);
    console.log(data);
});