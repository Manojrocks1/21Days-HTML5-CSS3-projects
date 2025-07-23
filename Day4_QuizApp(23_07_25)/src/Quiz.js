const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markdown Language",
    b: "Hyper Text Markup Language",
    c: "Home Tool Markup Language",
    d: "Hyperlinks and Text Markup Language",
    correct: "b"
  },
  {
    question: "What does CSS stand for?",
    a: "Computer Style Sheets",
    b: "Creative Style Sheets",
    c: "Cascading Style Sheets",
    d: "Colorful Style Sheets",
    correct: "c"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<js>",
    b: "<script>",
    c: "<javascript>",
    d: "<code>",
    correct: "b"
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((el) => (el.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((el) => {
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You scored ${score}/${quizData.length} ✅</h2>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});

loadQuiz();
