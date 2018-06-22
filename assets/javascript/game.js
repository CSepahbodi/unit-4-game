//variables for the game

var magicNum = "";
var wins = 0;
var losses = 0;
var totalScore = 0;
var num = [1,2,3,4,5,6,7,8,9,10,11,12];
var crystals = [];
var blue;
var red;
var white;
var yellow;
var crystalValue;

//the magic number that the user needs to match
magicNum = Math.floor((Math.random() * 100) + 19);

//numbers, wins and losses...
$('#magicNum').text(randomNum);
$('#userScore').text(totalScore);
$('#wins').text('Wins: '+ wins);
$('#losses').text('Losses: ' + losses);

//create the function that assigns a number for the crystals
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