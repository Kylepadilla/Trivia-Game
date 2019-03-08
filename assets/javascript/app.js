
//   json api https://discordapp.com/api/guilds/552898641367531531/widget.json
// server id: 552898641367531531
// widget: <iframe src="https://discordapp.com/widget?id=552898641367531531&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>



const triviaQuestion = [
    {
        question: "question 1",
        answers: ["0", "1", "2", "3"],
        correctAnswer: "1"
    },
    {   
        question: "question 2",
        answers:["1","2", "3","4" ],
        correctAnswer: "1"
    },
    {   
        question: "question 3",
        answers:["1","2", "3","4"],
        correctAnswer: "1"
    } ,
    {   
        question: "question 4",
        answers:["1","2", "3","4" ],
        correctAnswer: "1"
    } ,
    {   
        question: "question 5",
        answers:["1","2", "3","4" ],
        correctAnswer: "1"
    } ,
    {   
        question: "question 6",
        answers: ["1","2", "3","4"],
        correctAnswer: "1"
    } ,
    {   
        question: "question 7",
        answers:["1","2", "3","4"],
        correctAnswer: "1"
    } 
]
// Tracks the players responses 
var playerChoice;
var correctChoice;
var questionNumber = 0;
var answerChoices;
// keeps track of trivia progress

// stores player's trivia score
var correct = 0;
var incorrect = 0;
var playerScore;

// sets timer

var startTrivia = false;
var timerRunning = false;
var intervalID;
var time = 0

//sets reset buttton

function reset() {
    time = 0
    questionNumber = 0
    $("#timer").text("00:00")
}


//Loads welcome
var question = document.createElement

$(document).ready(function() {
    $("#start").html("Welcome to the trivia game where you will have the oppourtunity to test your knowledge on the worlds most mysterious beasts!");
   
    var s = $("<button>");
    s.addClass("startButton");
    s.text("Start!");
    $("#start").append(s);
    $(".question").hide();
    $(".answerChoices").hide()
    // var progress = ("<div>" +"Question: " + playerScore + "</div>");
})

    $("#start").click(function startGame(){
        $("#start").empty();
        $(".question").show();
        $(".answerChoices").show()

        startGame = true
     
        
        var i = questionNumber 
            var q = $("<div>")
            q.addClass("question");
            q.text(triviaQuestion[i].question);
            $(".question").append(q);

        for (var z = 0; z < triviaQuestion[i].answers.length; z++) {

        // var r = answerChoices
            var r = $("<button>");
            r.addClass("playerResponse");
            r.attr("id", triviaQuestion[i].answers[z])
            r.text(triviaQuestion[i].answers[z]);
            $(".answerChoices").append(r);
        }
    })
    


   
        $(".playerResponse").click(function correctAnswer() {
            console.log("ive been clicked");
            playerChoice = this.id;
            console.log(playerChoice)

            if(playerChoice === triviaQuestion[i].correctAnswer) {
                correctChoice++;
                questionNumber++;
                $(".counter").text("Question  " + questionNumber + "  of 7");
            }
            else{
                incorrect++;
                questionNumber++;
                $(".counter").text("Question  " + questionNumber + "  of 7");

            }

            correctAnswer();
        })

    
        // $(".playerResponse1").click(function correctAnswer() {
        //     console.log("ive been clicked 2");
        //     playerChoice = 1

        //     if(playerChoice === triviaQuestion[i].correctAnswer) {
        //         correctChoice++;
        //         questionNumber++;
        //     }
        //     else{
        //         incorrect++;
        //         questionNumber++;
        //     }

      
    

        // $(".playerResponse1").click(function correctAnswer() {
        //     console.log("ive been clicked");
        //     playerChoice = 1
        //     if(playerChoice === triviaQuestion[i].correctAnswer) {
        //         correctChoice++;
        //         questionNumber++;
        //     }
        //         else {
        //             incorrect++;
        //             questionNumber++;
        //         }
        //     }




            
            // startTrivia === true

            // if(startTrivia === true) {
            //     // start timer
            //     console.log("start trivia true")
            // }

// on click starts game

// $("#startButton").click(function startGame(){
//     console.log ("game has started");

//     $("#startGame").empty();


//     for (var i = 0; i < triviaQuestion.length; i++) {
        
//         var q = $("<div>")
//         q.addClass("question")
//         q.attr("questionNum", triviaQuestion [i]);

//     $("#button0").click(function(){
//         startGame = true
//         questionNumber++
//         i = questionNumber
//         if(questionNumber > 1 && startTrivia === true){
//             $("#question").text("question 1 appear here")

//         }
// })
// }
// });


// function triviaScore() {
//     triviaScore = correct - incorrect

//     if(playerChoice === correctChoice) {
//         correct++;
//         questionNumber++;
//         $("#question").html("HI")
//         else {
//             incorrect++
//         }
//     }
//     }