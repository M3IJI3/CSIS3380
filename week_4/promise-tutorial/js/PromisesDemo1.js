// the commented code shows how to create promise
// but is shown how it works in next steps

// var evenNumberPromise = new Promise(function (resolve, reject) {
//     //Do some stuff (usually async stuff)
//     var number = generateRandomNumber();

//     if (number % 2 == 0) {
//         //Resolved!
//         resolve("Even Number!")
//     } else {
//         //Reject!
//         reject("Odd Number!")
//     }

// })

// evenNumberPromise
//         .then(result => updateAlert(result))
//         .catch(err => updateAlert(err))

function generateRandomNumber() {
  var random = Math.floor(Math.random() * 10 + 1);
  return random;
}

function printRandomNumber() {
  document.getElementById('alert').innerText =
    'Random Number is: ' + generateRandomNumber();
}
