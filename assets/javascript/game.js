//variables for the game

var magicNumber = "";
var wins = 0;
var losses = 0;
var totalScore = 0;
var num = [1,2,3,4,5,6,7,8,9,10,11,12];
var crystals = [];
var blue;
var green;
var red;
var purple;
var buttonValue;

//the magic number that the user needs to match
magicNumber = Math.floor((Math.random() * 100) + 19);

//numbers, wins and losses...
$('#magicNumber').text(magicNumber);
$('#userScore').text(totalScore);
$('#wins').text('Wins: '+ wins);
$('#losses').text('Losses: ' + losses);

//create the function that assigns a number for each of the crystals
function numCrystals() {
crystals = num.sort(function(a, b){return 0.5 - Math.random()});

blue = crystals[0];
green = crystals[1];
red = crystals[2];
purple = crystals[3];

//now it is time to assign a value to each crystal so that when clicked they put out a specific value
$('#crystal1').attr('data-value', blue);
$('#crystal2').attr('data-value', green);
$('#crystal3').attr('data-value', red);
$('#crystal4').attr('data-value', purple);
}

numCrystals();
//values associated with each crystal...
console.log(crystals, blue, green, red, purple);

//when user clicks on each button then a number will be added to the user's total score.
$('.crysButt').on('click', function() {
    buttonValue = $(this).attr('data-value');

    totalScore = totalScore + parseInt(buttonValue);
    $('#userScore').text(totalScore);

    if (totalScore == magicNumber) {
        wins++;
        $('#win').text("Wins: "+ wins);
        alert ("You Win!");

        reset();

    }else if (totalScore > magicNumber) {
        losses++;
        $('#loss').text("Losses: " + losses);
        alert("You Lose!");

        reset();
    }
});

//once user has either won or lost the game needs to reset
function reset() {
    numCrystals();
    console.log(crystals, blue, red, white, yellow);
    totalScore = 0;
    $('#userScore').text(totalScore);
    magicNumber = Math.floor((Math.random() * 100) + 19);
    $('#magicNumber').text(magicNumber);
}