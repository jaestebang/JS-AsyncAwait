const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (false) return reject(new Error('KO'));
        return resolve('OK');
    });
};

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (!true) {
            return reject(new Error('KO2'));
        }
        setTimeout(() => {
            return resolve('OK2');
        }, 4000);

    });
};

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })