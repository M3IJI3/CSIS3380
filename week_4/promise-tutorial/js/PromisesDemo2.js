// as you can see here promise only is executed once.
// so in next step, we put it inside the function.

var evenNumberPromise = new Promise(function (resolve, reject) {
  //Do some stuff (usually async stuff)
  var number = generateRandomNumber();

  if (number % 2 == 0) {
    //Resolved!
    resolve('Even Number!');
  } else {
    //Reject!
    reject('Odd Number!');
  }
});

// evenNumberPromise
//         .then(result => updateAlert(result))
//         .catch(err => updateAlert(err))

function generateRandomNumber() {
  var random = Math.floor(Math.random() * 10 + 1);
  return random;
}

function printRandomNumber() {
  evenNumberPromise
    .then((result) => updateAlert(result))
    .catch((err) => updateAlert(err));
}

function updateAlert(text) {
  //Pull alert object form page
  document.getElementById('alert').innerText = text;
}
