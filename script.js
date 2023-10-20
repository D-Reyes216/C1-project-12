// function reset() {
//     questionList.currentIndex.classList.remove('.active')
// }

const ques = document.getElementById('question')

//gets labels to edit answer text
// const ans1Text = document.getElementById('answerLabel1');
// const ans2Text = document.getElementById('answerLabel2');
// const ans3Text = document.getElementById('answerLabel3');

//gets radio elements to read user input
const ans1 = document.getElementById('answer1');
const ans2 = document.getElementById('answer2');
const ans3 = document.getElementById('answer3');

const checkAnsButton = document.querySelector('button.check');
const nextButton = document.querySelector('button.next');

const question1 = {
    question: "What is 1 + 1?",
    answer1: "4",
    answer2: "10",
    answer3: "2",
    correct: "2"
};

const question2 = {
    question: "What is 2 + 2?",
    answer1: "4",
    answer2: "15",
    answer3: "20",
    correct: "4"
};

const question3 = {
    question: "What is 5 + 5?",
    answer1: "6",
    answer2: "10",
    answer3: "5",
    correct: "10"
};

let questionList = [question1, question2, question3];
currIndex = 0;

function checkAnswer() {

}

function nextQuestion() {
    currIndex ++;
    let currQuestion = questionList[currIndex];

    $("#question").text(currQuestion.question);
    $("#answerLabel1").text(currQuestion.answer1);
    $("#answerLabel2").text(currQuestion.answer2);
    $("#answerLabel3").text(currQuestion.answer3);
}

checkAnsButton.addEventListener('click', checkAnswer)
nextButton.addEventListener('click', nextQuestion)

$("#question").text(question1.question);
$("#answerLabel1").text(question1.answer1);
$("#answerLabel2").text(question1.answer2);
$("#answerLabel3").text(question1.answer3);