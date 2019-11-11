function populate() {
if(quiz.isEnded()) {
showScores();
}
else {
// show question
var element = document.getElementById("question");
element.innerHTML = quiz.getQuestionIndex().text;

// show options
var choices = quiz.getQuestionIndex().choices;
for(var i = 0; i < choices.length; i++) {
var element = document.getElementById("choice" + i);
element.innerHTML = choices[i];
guess("bt" + i, choices[i]);
}
showProgress();
}
};

function guess(id, guess) {
var button = document.getElementById(id);
button.onclick = function() {
quiz.guess(guess);
populate();  }
};

function showProgress() {
var currentQuestionNumber = quiz.questionIndex + 1;
var element = document.getElementById("progress");
element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
var gameOverHTML = "<h1>Result</h1>";
gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
var element = document.getElementById("quiz");
element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
new Question("1.India and ____________ signed Contract for Modernisation of Radar and Missile System", ["Russia", "Indonesia","Iran", "Iraq"], "Russia"),

new Question("2.Payas Jain won __________at ITTF Asian Junior and Cadet Championship", ["Gold", "silver","Bronze", "None of these"], "silver"),
    
new Question("3.President kovind address the Indian community in _________________", ["Thailand", "Saudi Arabia","Indonesia", "Korea"], "Thailand"),
    
new Question("4.Which radiolocation did the military service has a shipborne is capable of providing Target Designation information to missile systems?", ["2D","3D","4D", "None of this"], "3D"),
    


];


var quiz = new Quiz(questions);


populate();





