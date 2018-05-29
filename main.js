$(document).ready(goGoApp);

function goGoApp() {
    // addClickHandlers();
    console.log('Doc Ready');
    tier0();
}
// function addClickHandlers(){
//     $('.option1').click(processChoice1);
//     $('.option2').click(processChoice2);
// }

function tier0(){
    $('.info').text('You are in a jungle. What do you do?');
    $('.option1').text('Yell').click(processChoice0_1);
    $('.option2').text('Explore').click(processChoice0_2);
}
function tier1() {
    $('.info').text('You find a den of panthers, what do you do?');
    $('.option1').text('Yell').click(processChoice1_1);
    $('.option2').text('Run').click(processChoice1_2);
}
function tier2() {
    $('.info').text('You get away and climb a tree to stay safe. Now what?');
    $('.option1').text('Yell').click(processChoice2_1);
    $('.option2').text('Distract Panthers').click(processChoice2_2);
}
function tier3() {
    $('.info').text('The panthers leave, you drop down and run  the other way. You find a cave, do you go in?');
    $('.option1').text('Yes').click(processChoice3_1);
    $('.option2').text('No').click(processChoice3_2);
}


function processChoice0_1() {
    $('.info').text('U ded');
    $('.option').detach();
}
function processChoice0_2() {
    tier1();
}
function processChoice1_1() {
    $('.info').text('U ded');
    $('.option').detach();
}
function processChoice1_2() {
    tier2();
}
function processChoice2_1() {
    $('.info').text('U ded');
    $('.option').detach();
}
function processChoice2_2() {
    tier3();
}
function processChoice3_1() {
    $('.info').text('You\'re saved! You found an explorer camp');
    $('.result').text('Play Again?');
    $('.option').detach();
}
function processChoice3_2() {
    $('.info').text('U ded');
    $('.option').detach();
}