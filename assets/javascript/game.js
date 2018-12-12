// 12/5/2018 - Guess the state hangman game - Georgia Tech coding bootcamp
$(document).ready(function() {

    // variables
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    // generate and display random number
    var randomNumber = Math.floor(Math.random() * 102) +19;
    $("#random-number").text(randomNumber); 

    // initialize crystal values - generate random number values for the crystals
    var sapphireVal = Math.floor(Math.random() * 12) + 1;
    var emeraldVal = Math.floor(Math.random() * 12) + 1;
    var rubyVal = Math.floor(Math.random() * 12) + 1;
    var citrineVal = Math.floor(Math.random() * 12) + 1;


    // gem click events
    $("#sapphire").on("click", function(){
        totalScore += sapphireVal;
        $("#score-display").text(totalScore);
        runGame();
    });

    $("#emerald").on("click", function(){
        totalScore += emeraldVal;
        $("#score-display").text(totalScore);
        runGame();
    });

    $("#ruby").on("click", function(){
        totalScore += rubyVal;
        $("#score-display").text(totalScore);
        runGame();
    });
    
    $("#citrine").on("click", function(){
        totalScore += citrineVal;
        $("#score-display").text(totalScore);
        runGame();
    });


    // main game
    function runGame() {
        if (totalScore === randomNumber) {
            wins++;
            $("#wins-counter").text(wins);
            resetGame();
        } else if (totalScore > randomNumber) {
            losses++;
            $("#losses-counter").text(losses);
            resetGame();
        } 
    }

    // reset relevant game values
    function resetGame() {
        totalScore = 0;
        randomNumber = Math.floor(Math.random() * 102) +19;
        $("#random-number").text(randomNumber); 
        sapphireVal = Math.floor(Math.random() * 12) + 1;
        emeraldVal = Math.floor(Math.random() * 12) + 1;
        rubyVal = Math.floor(Math.random() * 12) + 1;
        citrineVal = Math.floor(Math.random() * 12) + 1;
    }


    })
    