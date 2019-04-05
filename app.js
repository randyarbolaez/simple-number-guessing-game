const randomNumber = Math.floor(Math.random() * 11);

function reloadPage() {
  setTimeout(() => {
    location.reload();
  }, 3000);
}

function checkIfNumbersMatch(random, user) {
  let correctOrIncorrect = document.getElementById('correct-or-incorrect');
  if (random == Number(user)) {
    return (correctOrIncorrect.innerHTML = 'You guessed it correctly!!!');
  }
  correctOrIncorrect.innerHTML = `You guessed it wrong, the right answer was ${random}`;
}

function submitForm(e) {
  e.preventDefault();
  let numberTheUserGuessed = document.getElementById(
    'number-that-the-user-guessed'
  ).value;
  checkIfNumbersMatch(randomNumber, numberTheUserGuessed);
  console.log(Number(numberTheUserGuessed));
  reloadPage();
}

console.log(`The correct answer is: ${randomNumber}`);
