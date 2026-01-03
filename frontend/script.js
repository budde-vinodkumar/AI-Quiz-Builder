let quizData = [];
let index = 0;

async function generateQuiz() {
    const topic = document.getElementById("topicInput").value;

    if (!topic) {
        alert("Enter topic");
        return;
    }

    const response = await fetch("http://127.0.0.1:5000/generate-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic })
    });

    const data = await response.json();
    quizData = data.questions;
    index = 0;

    show();
}

function show() {
    document.getElementById("questionText").innerText =
        quizData[index].question;

    document.getElementById("answerText").innerText =
        quizData[index].answer;
}

function nextQuestion() {
    if (index < quizData.length - 1) {
        index++;
        show();
    }
}

function prevQuestion() {
    if (index > 0) {
        index--;
        show();
    }
}
