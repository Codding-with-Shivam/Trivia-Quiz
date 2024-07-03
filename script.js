// quiz.js

const quizContainer = document.getElementById('quiz-container');
const quizCard = document.getElementById('quiz-card');
const nextQuestionButton = document.getElementById('next-question');
const submitQuizButton = document.getElementById('submit-quiz');

let currentQuestionIndex = 0;
let quizQuestions = [];

// Load quiz questions dynamically
fetch('quiz-questions.json')
  .then(response => response.json())
  .then(data => {
    quizQuestions = data;
    loadQuestion();
  });

// Load question and answers dynamically
function loadQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  const questionHTML = `
    <div class="card">
      <h5 class="card-title">${question.question}</h5>
      <ul class="list-group list-group-flush">
        ${question.answers.map((answer, index) => `
          <li class="list-group-item">
            <input type="radio" id="answer-${index}" name="answer">
            <label for="answer-${index}">${answer}</label>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
  quizCard.innerHTML = questionHTML;
}

// Next question button click handler
nextQuestionButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    nextQuestionButton.style.display = 'none';
    submitQuizButton.style.display = 'block';
  }
});

// Submit quiz button click handler
submitQuizButton.addEventListener('click', () => {
  // TO DO: implement quiz submission logic here
  alert('Quiz submitted!');
});