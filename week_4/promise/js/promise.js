function generateRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

function printRandomNumber() {
    evenNumberPromise = new Promise(function (resolve, reject) {
        let number = generateRandomNumber();
        console.log(number)

        if (number % 2 === 0) {
            resolve('Even Number')
        } else {
            reject('Not Even Number')
        }
    })

    evenNumberPromise
        .then((result) => updateAlert(result))
        .catch((err) => updateAlert(err));

    function updateAlert(text) {
        document.getElementById('alert').innerText =
            "Random Number is: " + text;
    }
}