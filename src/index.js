//Form 선언
const SubmitUserNumber = document.querySelector("#onSubmit-userNumber");
const SubmitGuessNumber = document.querySelector("#onSubmit-guessNumber");

//Choice Var
const userChoice = document.querySelector(".userChoice");
const machineChoice = document.querySelector(".machineChoice");

//Input data 가져오기
const userNumberInput = document.querySelector(".userNumberInput");
const guessNumberInput = document.querySelector(".guessNumber");

//Button 가져오기
const playButton = document.querySelector(".playButton");

//Won lost 가져오기
const won = document.querySelector(".won");
const lost = document.querySelector(".lost");

//Numbers Var
const USERNUMBER_KEY = "userNumber";
const GUESSNUMBER_KEY = "guessNumber";

// User Number submit Function
function onSubmitUserNumber(event) {
  event.preventDefault();
  //저장
  const userNumber = userNumberInput.value;
  localStorage.setItem(USERNUMBER_KEY, userNumber);
  //Max value 지정
  guessNumberInput.setAttribute("max", userNumber);
  //Inspect
  console.log(userNumber);
}

// Guess Number submit Function
function onSubmitGuessNumber(event) {
  event.preventDefault();

  //Set Guess Number
  const guessNumber = guessNumberInput.value;
  localStorage.setItem(GUESSNUMBER_KEY, guessNumber);

  //inspect
  console.log(guessNumber);

  //html에 user chose print
  userChoice.innerText = guessNumber;

  //macine number generate
  const randomNumber = Math.ceil(
    Math.random() * parseInt(localStorage.getItem(USERNUMBER_KEY))
  );
  //guess number 선언
  const guessedNumber = parseInt(localStorage.getItem(GUESSNUMBER_KEY));

  //random number inspect
  console.log(randomNumber);

  //html에 machine chose 숫자 출력
  machineChoice.innerText = randomNumber;

  //Condition
  if (guessedNumber === randomNumber) {
    won.classList.remove("hidden");
    lost.classList.add("hidden");
  } else {
    lost.classList.remove("hidden");
    won.classList.add("hidden");
  }
}

// Event Listener
SubmitUserNumber.addEventListener("submit", onSubmitUserNumber);
SubmitGuessNumber.addEventListener("submit", onSubmitGuessNumber);
