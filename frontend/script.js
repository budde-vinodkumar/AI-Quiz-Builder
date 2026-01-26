// =======================
// ELEMENTS
// =======================
const topicInput = document.getElementById("topic");
const generateBtn = document.getElementById("generateBtn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// =======================
// STATE
// =======================
let quiz = [];
let currentIndex = 0;
let score = 0;

// =======================
// SAMPLE DATA (fallback)
// =======================
const demoQuiz = [
  {
    question: "What does DBMS stand for?",
    options: [
      "Database Management System",
      "Data Backup Management System",
      "Dynamic Base Model System",
      "Digital Business Management System"
    ],
    answer: "Database Management System"
  },
  {
    question: "Which key uniquely identifies a record?",
    options: ["Foreign Key", "Primary Key", "Candidate Key", "Composite Key"],
    answer: "Primary Key"
  },
  {
    question: "Which language is used to query databases?",
    options: ["HTML", "CSS", "SQL", "Python"],
    answer: "SQL"
  }
];

// =======================
// GENERATE QUIZ
// =======================
generateBtn.addEventListener("click", () => {
  const topic = topicInput.value.trim();

  if (topic === "") {
    alert("Please enter a topic");
    return;
  }

  // Later: replace with backend fetch
  quiz = demoQuiz;
  currentIndex = 0;
  score = 0;
  resultEl.textContent = "";

  renderQuestion();
});

// =======================
// RENDER QUE
fetch("http://127.0.0.1:5000/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ topic })
})
