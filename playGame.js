function playGame(){
//Ask a player one for a number between 1 and 4
var p1 = prompt(" Player one Choose Num between 1 and 4");
//Ask a other player for a number 1 and 4
var p2 = prompt(" Player two choose Num between 1 and 4");
// scold the player in they entered a number outside of the range then end the game.
if ((p1 < 1 || p1 > 4) || (p2 < 1 || p2 > 4)) {
		window.alert( "One of you cheated. Game over you loser!");
    return;
}
//If both players one And player two numbers are the same. say everyone wins.
if (p1 === p2){
	window.alert("damn it, You both wins!");
}
//Else tell both player what they choose and why they are the losers
else{
	window.alert("You both lose. Suckers! Player one choose " + p1 + ", and Player two choose " + p2);
}
}
playGame();