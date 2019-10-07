$(document).ready(function () {

    var correctAnswers = 0;
    $("#correct").html("Correct: " + correctAnswers)
    var incorrectAnswers = 0;
    $("#incorrect").html("Incorrect: " + incorrectAnswers)
    var unanswered = 0;
    $("#unanswered").html("Unanswered: " + unanswered)
    var answered = 0;
    var number = 61;
    var intervalId;
    var totalQuestions = 5;


    for (var i = 0; i < number; i++) {
        function startGame() {
            clearInterval(intervalId);
            intervalId = setInterval(countDown, 1000);
            answered = correctAnswers + incorrectAnswers;
        }

        function answeredQuestions() {
            answered = correctAnswers + incorrectAnswers;
            if (answered === 5) {
                endGame();
            }
        }

        function countDown() {
            number--;
            $("#timer").html("Seconds Remaining: " + number);
            if (number === 0) {
                endGame();
                
            }
        }


        function endGame() {
            if (number === 0) {
                unanswered = totalQuestions - answered;
                clearInterval(intervalId);
                
            }
        }
        startGame();
    };


    function correctPoint() {
        correctAnswers++;
        $("#correct").html("Correct: " + correctAnswers)
    };

    function wrongPoint() {
        incorrectAnswers++;
        $("#incorrect").html("Incorrect: " + incorrectAnswers)
    }



        $("input[value=correct]").on("click", correctPoint());
        $("input[value=wrong]").on("click", wrongPoint());



});