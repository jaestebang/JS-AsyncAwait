/**
 * Suma dos números
 * @param {*} x Número 1
 * @param {*} y Número 2
 * @returns 
 */
function sum(x, y) {
    return x + y;
}

/**
 * Calculo de números
 * @param {*} x Número 1
 * @param {*} y Número 2
 * @param {*} callback Callback
 */
function calc(x, y, callback) {
    return callback(x, y);
}

/**
 * Imprime fecha
 * @param {*} dateNow fecha
 */
function printDate(dateNow) {
    console.log(dateNow);
}

/**
 * Imprime fecha
 * @param {*} callback callback
 */
function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        callback(new Date);
    }, 3000)
}

console.log(calc(6, 2, sum));
date(printDate);