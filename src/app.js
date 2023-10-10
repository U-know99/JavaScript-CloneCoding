// HTML에서 필요한 요소들을 id로 선택
const onSubmitPlay = document.getElementById("#onSubmitPlay");
const guessNumberForm = document.querySelector(".guessNumber-Form");

const userChoice = document.querySelector(".userChoice");
const machineChoice = document.querySelector(".machineChoice");
const playButton = document.querySelector(".playButton");

// 함수

function onSubmitNumber(event) {
  event.preventDefault();
  //input data 가져오기
  const userNumberInput = document.querySelector(".userNumberInput");
  const guessNumberInput = document.querySelector(".guessNumber");
  //value 가져오기
  const userNumber = userNumberInput.value;
  const guessNumber = guessNumberInput.value;

  //숫자 변수
  const USERNUMBER_KEY = "userNumber";
  const GUESSNUMBER_KEY = "guessNumber";

  localStorage.setItem(USERNUMBER_KEY, userNumber);
  console.log(userNumber);
  localStorage.setItem(GUESSNUMBER_KEY, guessNumber);
  console.log(guessNumber);
  userChoice.innerText = guessNumber;
}

// usernumber submit 이벤트 리스너 추가
onSubmitPlay.addEventListener("submit", onSubmitNumber);
