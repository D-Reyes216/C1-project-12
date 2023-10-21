//questions
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
let numCorrect = 0;

//selects and deselects choices based on user input
$('.answer').on('click', function() {
    resetAnswers();
    $(this).addClass('selected');
    $('button.check').removeAttr('disabled');   
})

//button event listeners
$('button.check').on('click', checkAnswer)
$('button.next').on('click', nextQuestion)

function checkAnswer() {
    $('button.answer').attr('disabled', true);

    if($('button.selected').text() == questionList[currIndex].correct){
        $('div.choice')
            .css('background-color', 'rgb(30, 255, 105)')
            .text('Correct!')
        numCorrect ++;
    } else {
        $('div.choice').text('Incorrect')
            .css('background-color', 'red')
            .text('Incorrect')
    }

    $('button.next').removeAttr('disabled');

    if(currIndex >= questionList.length - 1){
        //when last question is answered, shows total correct answers changes text to ask if user wishes to try again
        $('button.check').text('Total Correct Answers: ' + numCorrect)  
        $('button.next').text('Play Again?')
    }
}

//update text for question and answers
function updateQuestions() {
    $("#question").text(questionList[currIndex].question);
    $("#answer1").text(questionList[currIndex].answer1);
    $("#answer2").text(questionList[currIndex].answer2);
    $("#answer3").text(questionList[currIndex].answer3);
}

updateQuestions();

function resetAnswers() {
    $('button.answer').removeClass('selected'); 
   
    $('div.choice')
        .css('background-color', '')
        .text('')

    $('button.answer').removeAttr('disabled');
}

//update question + answer text
function nextQuestion() { 
    currIndex ++;
    updateQuestions()
    resetAnswers();

    $('button.next').attr('disabled', true);
 
    if(currIndex == questionList.length - 1){
        //changes event listener to let user reset quiz on click when on last question
        $('button.next')
            .text('Final Question')
            .off('click')
            .on('click', resetQuiz)
    }
}

function resetQuiz() {
    currIndex = 0;
    numCorrect = 0;
    resetAnswers();
    updateQuestions();
    
    //changes event listener back to update to next question when resetting quiz
    $('button.next')
        .text('Final Question')
        .off('click')
        .on('click', nextQuestion)
    
    //resets buttons to original text and disabled status
    $('button.check')
        .text('Confirm and Check Answer')
        .attr('disabled', true);;
    $('button.next')
        .text('Next Question')
        .attr('disabled', true);
}