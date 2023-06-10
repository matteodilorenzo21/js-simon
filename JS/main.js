// JS LINK RUN CHECK
console.log('JS RUNNING!');

const inputNum1 = document.querySelector('#input-num1');
const inputNum2 = document.querySelector('#input-num2');
const inputNum3 = document.querySelector('#input-num3');
const inputNum4 = document.querySelector('#input-num4');
const inputNum5 = document.querySelector('#input-num5');

const inputForm = document.querySelector('#form');
inputForm.classList.add('d-none'); // Nascondi l'elemento inputForm all'inizio

const timerArea = document.querySelector('#timer-area');

const displayNumbers = document.querySelector('#display-numbers');

const playerResult = document.querySelector('#result');

const displayMatches = document.querySelector('#display-matches'); // Correggi l'ID dell'elemento

const submitBtn = document.querySelector('#submit-btn');
submitBtn.disabled = true; // Disabilita il bottone all'inizio

// 2. Creiamo una funzione che genera 5 numeri casuali e non ripetuti e li salva dentro un Array
function generateRandomNumbers() {
  const numbers = [];
  while (numbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * 99) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

// 3. Facciamo partire una timing Function all'avvio della pagina dalla durata di 30 secondi
function startTimer() {
  let seconds = 30;
  const timerElement = document.querySelector('#timer');
  timerElement.textContent = seconds;

  const timer = setInterval(() => {
    seconds--;
    timerElement.textContent = seconds;

    if (seconds === 0) {
      clearInterval(timer);
      timerElement.textContent = "Tempo scaduto! Inserisci i numeri";
      displayMatches.classList.add('d-none');
      displayNumbers.textContent = ''; // Nascondi i numeri
      inputForm.classList.remove('d-none'); // Mostra l'elemento inputForm
      submitBtn.disabled = false; // Abilita il bottone
    }
  }, 1000);

  return timer;
}

// Generiamo i numeri casuali e li salviamo in un array
const randomNumbers = generateRandomNumbers();
console.table(randomNumbers);

// Mostra i numeri generati casualmente nell'elemento con id "display-numbers"
displayNumbers.textContent = randomNumbers.join(' ');

// 4. Mettiamo in ascolto un bottone che raccoglie i numeri inseriti dall'utente e verifica quanti numeri ha indovinato
submitBtn.addEventListener('click', () => {
  const userNumbers = [
    parseInt(inputNum1.value),
    parseInt(inputNum2.value),
    parseInt(inputNum3.value),
    parseInt(inputNum4.value),
    parseInt(inputNum5.value),
  ];

  displayMatches.classList.remove('d-none');

  timerArea.classList.add('d-none');

  // Verifica se i numeri inseriti sono minori di 0
  const isNegative = userNumbers.some((number) => number < 0);

  if (isNegative) {
    playerResult.textContent = 'Non puoi inserire numeri negativi!';
    return;
  }

  let numMatches = 0;
  const matchedNumbers = [];
  
  // verifica se i numeri inseriti dall'utente sono uguali ai numeri casuali nell'Array
  for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers.includes(userNumbers[i])) {
      numMatches++;
      matchedNumbers.push(userNumbers[i]);
    }
  }
  
  let resultMessage = `Numeri indovinati: ${numMatches}`;

  playerResult.textContent = resultMessage;
  
  if(numMatches === 0) {
    displayMatches.textContent = ``
  } else {
      displayMatches.textContent = `I numeri indovinati sono: ` + matchedNumbers.join(' - '); // Mostra i numeri indovinati
  }
});

// Avviamo la timing function
const timer = startTimer();