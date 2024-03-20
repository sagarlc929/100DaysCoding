

const questionObject = [
  { 
    description: "Please ..... our enclosed current catalogue and price list.",
    options: ["find", "look", "receive", "examine"],
    answer: "a",
  },
  { 
    description: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Mercury"],
    answer: "b",
  },
  { 
    description: "Who is the author of the Harry Potter book series?",
    options: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
    answer: "a",
  },
  { 
    description: "What is the capital city of France?",
    options: ["London", "Paris", "Rome", "Berlin"],
    answer: "b",
  },
  { 
    description: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "d",
  },
  { 
    description: "Who painted the Mona Lisa?",
    options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
    answer: "b",
  },
  { 
    description: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Vietnam"],
    answer: "b",
  },
  { 
    description: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
    answer: "b",
  },
  { 
    description: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
    answer: "a",
  },
  { 
    description: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    answer: "a",
  },
];

const descriptionDiv = document.getElementById('description-div');
const optionDiv = document.getElementById('option-div');
const quizResultContainer = document.getElementById('quiz-result-container');
const quizQuestionContainer = document.getElementById('quiz-question-container');
var currentQuestion = 0;
var score = 0;

function showQuestion() {
  const currentQuestionObject = questionObject[currentQuestion];
  descriptionDiv.innerText = currentQuestionObject.description;

  optionDiv.innerHTML = ""; // Clear previous options before creating new ones

  currentQuestionObject.options.forEach((option, index) => {
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "option";
    radioButton.id = String.fromCharCode(97 + index);

    const label = document.createElement("label");
    label.textContent = option;
    label.setAttribute("for", String.fromCharCode(97 + index));

    const div = document.createElement("div");
    div.id = "option-" + String.fromCharCode(97 + index);
    optionDiv.appendChild(div);
    div.appendChild(radioButton);
    div.appendChild(label);
    div.appendChild(document.createElement("br"));
  });

  // Disable previous button on the first question
}

function nextClicked() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const selectedOptionId = selectedOption.id;
    const currentQuestionObject = questionObject[currentQuestion];
    if (selectedOptionId === currentQuestionObject.answer) {
      score++;
      console.log("Correct!");
    } else {
      console.log("Wrong.");
    }

    if (currentQuestion < questionObject.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      showResult();
    }
  } else {
    alert("Please select an answer before clicking Next.");
  }
}

window.onload = function() {
  showQuestion();
}

function restartGame() {
  currentQuestion = 0;
  quizResultContainer.style.display = "none";
  quizQuestionContainer.style.display ="block";
  score = 0;
  showQuestion();
}

function showResult() {
  quizResultContainer.style.display = "block";
  quizQuestionContainer.style.display ="none";
  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = `<h3>Quiz Result</h3>`;
  resultDiv.innerHTML += `<p>You scored ${score} out of ${questionObject.length} questions.</p>`;
  resultDiv.innerHTML += `<button onclick="restartGame()">Play again</button>`;
  quizResultContainer.appendChild(resultDiv);
}

