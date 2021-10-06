//Dependencias
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/**
 * Retorna una promesa con el llamado a la API
 * @param {string} url_api URL
 */
exports.fetchData = function (url_api) {

    return new Promise((resolve, reject) => {

        // Instancia del Request
        const xhttp = new XMLHttpRequest();

        // Invocamos el método GET asíncrono
        xhttp.open('GET', url_api, true);

        // Función que se ejecutará cuando el objeto XMLHttpRequest cambie de estado
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === xhttp.DONE) {

                //Resove = JSON
                //Reject = Error
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api));
            }
        });

        // por ultimo enviamos la peticion
        xhttp.send();
    })
}