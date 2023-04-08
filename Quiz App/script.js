const questions = [
  {
    que: "What temperature does water boil at?",
    a: "50 degrees Celcius",
    b: "25 degrees Celcius",
    c: "100 degrees Celcius",
    d: "150 degrees Celcius",
    correct: "c",
  },

  {
    que: "Who wrote Julius Caesar, Macbeth and Hamlet?",
    a: "William Shakespeare",
    b: "Wole Soyinka",
    c: "Ngozi Chimamanda Adichie",
    d: "Dan Brown",
    correct: "a",
  },

  {
    que: "What did the crocodile swallow in Peter Pan?",
    a: "A Book",
    b: "A Computer",
    c: "A pair of shoes",
    d: "Alarm Clock",
    correct: "d",
  },

  {
    que: "Which is the only mammal that can’t jump?",
    a: "Dog",
    b: "Elephant",
    c: "Goat",
    d: "Lion",
    correct: "b",
  },

  {
    que: "Who lived at 221B, Baker Street, London?",
    a: "Tony Stark",
    b: "Morgan Freeman",
    c: "Sherlock Holmes",
    d: "Samuel L. Jackson",
    correct: "c",
  },
];

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

let index = 0;
let total = questions.length;
let correct = 0,
  incorrect = 0;

const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
} else {
    incorrect++;
}
  console.log("correct" + correct);
  console.log("wrong" + incorrect);
  index++;
  loadQuestion();
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });

  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <div style="text-align: center">
    <h3> Thank you for playing the Quiz </h3>
    <h2> ${correct} / ${total} are Correct </h2>
    </div>
    `;
};

loadQuestion(index);
