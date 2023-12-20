
  const questions = [
    {
        question: "What is the purpose of the 'let' keyword in JavaScript?",
        variants: [
            "A) To declare a variable with block scope",
            "B) To declare a constant variable",
            "C) To declare a variable with function scope",
            "D) To declare a global variable",
        ],
        correctAnswer: "A) To declare a variable with block scope",
    },
    {
        question: "What is the role of the 'querySelector' method in JavaScript?",
        variants: [
            "A) To select and manipulate HTML elements",
            "B) To query the database",
            "C) To query the DOM for a specific CSS selector",
            "D) To query the server for data",
        ],
        correctAnswer: "C) To query the DOM for a specific CSS selector",
    },
    {
        question: "How can you prevent the default behavior of an event in JavaScript?",
        variants: [
            "A) event.stop()",
            "B) event.halt()",
            "C) event.preventDefault()",
            "D) event.cancel()",
        ],
        correctAnswer: "C) event.preventDefault()",
    },
    {
        question: "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
        variants: [
            "A) To parse a JSON string",
            "B) To convert a JavaScript object to a JSON string",
            "C) To extract data from a JSON object",
            "D) To check if a variable is of JSON type",
        ],
        correctAnswer: "B) To convert a JavaScript object to a JSON string",
    },
    {
        question: "What is the purpose of the 'map' method in JavaScript?",
        variants: [
            "A) To iterate over the elements of an array",
            "B) To create a new array with the results of calling a provided function on every element in the array",
            "C) To filter elements in an array based on a given condition",
            "D) To sort the elements of an array",
        ],
        correctAnswer: "B) To create a new array with the results of calling a provided function on every element in the array",
    },
    // {
    //     question: "What is the difference between "let" and "const" in JavaScript?",
    //     variants: [
    //         "A) 'let' is block-scoped, and 'const' is function-scoped",
    //         "B) 'let' allows reassignment, and 'const' does not allow reassignment",
    //         "C) 'let' is used for constants, and 'const' is used for variables",
    //         "D) 'let' is used for variables, and 'const' is used for constants",
    //     ],
    //     correctAnswer: "B) 'let' allows reassignment, and 'const' does not allow reassignment",
    // },
    {
        question: "What is the purpose of the 'async/await' keywords in JavaScript?",
        variants: [
            "A) To create asynchronous functions",
            "B) To declare variables asynchronously",
            "C) To handle exceptions in asynchronous code",
            "D) To define callback functions",
        ],
        correctAnswer: "A) To create asynchronous functions",
    },
    {
        question: "What is a closure in JavaScript, and why is it useful?",
        variants: [
            "A) A way to lock variables",
            "B) A combination of a function and the lexical environment within which that function was declared",
            "C) A built-in security feature",
            "D) A type of loop in JavaScript",
        ],
        correctAnswer: "B) A combination of a function and the lexical environment within which that function was declared",
    },
    // {
    //     question: "How do you check if a variable is an array in JavaScript?",
    //     variants: [
    //         "A) Using the 'typeof' operator",
    //         "B) Using the 'isArray' method",
    //         "C) Using the 'arrayOf' function",
    //         "D) Using the 'array' keyword",
    //     ],
    //     correctAnswer: "B) Using the 'isArray' method",
    // },
    {
        question: "What is the purpose of the 'splice' method in JavaScript?",
        variants: [
            "A) To add elements to the beginning of an array",
            "B) To remove elements from the end of an array",
            "C) To remove or replace elements from a specific index in an array",
            "D) To concatenate two arrays",
        ],
        correctAnswer: "C) To remove or replace elements from a specific index in an array",
    }
];

class QuestionGame {
  point = 0;
  nextQIndex = -1;
  qData = [];
  currentQuestion = null;
  questionPoint = 0;
  incrementSuccess= 0;
  constructor(data) {
    this.qData = data;
    this.questionPoint = Math.round(100 / this.qData.length);
  }

  updatePoint() {
    const pointDisplay = document.querySelector("#pointDisplay");
    pointDisplay.innerHTML = `${this.point}`;
  }
  incrementPoint() {
    this.point += 10;
    this.updatePoint();
  }

  nextQuestion() {
    if (this.nextQIndex == this.qData.length - 1) {
      questionBox.innerHTML = ""
      gameOver.style.display="block";
      return false;
    } else {
      this.nextQIndex += 1;

      const questionItem = this.qData[this.nextQIndex];

      this.currentQuestion = questionItem;
      this.incrementSuccess = this.incrementSuccess + this.questionPoint

      return questionItem;
    }
  }
}

const qTitle = document.querySelector("#qTitle");
const questionGame = document.getElementById("questionGame");
const btnGroup = document.querySelector("#btnGroup");
const pointDisplay = document.querySelector("#pointDisplay");
const progressBar = document.getElementById("progressBar");
const questionBox = document.getElementById("question-box");
const gameOver = document.getElementById("gameOver");
const gameQ = new QuestionGame(questions);

function startGame() {
  gameQ.nextQuestion();

  const qObj = gameQ.currentQuestion;
  qTitle.innerHTML = qObj.question;
 

  btnGroup.innerHTML = qObj.variants
    .map(
      (item,index) =>
        `<button class="btn btn-outline-light"  onclick="selectItem('${item}')">${item}</button>`
    )
    .join("");

  // console.log(qObj);
}

startGame();


function selectItem(userChoose) {
  console.log(userChoose);
  progressBar.style.width = `${gameQ.incrementSuccess}%`;
  if (userChoose === gameQ.currentQuestion.correctAnswer) {
    // console.log("asdfg");
    gameQ.incrementPoint();
    questionBox.classList.add("bg-primary");
    questionBox.classList.remove("bg-danger");
  } else {
    questionBox.classList.add("bg-danger");
    questionBox.classList.remove("bg-primary");
    console.log("else");
  }
  startGame();
}
