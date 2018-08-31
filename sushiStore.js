var spicyAhi = {
 fishType:"Ahi",
 sause:"Sriacha & Mayo",
 price:"100.00",
 rice:"White",
 ounces : 8
};
//ask the user to amount of spicy ahi to buy
var amount = prompt("Amount of Spicy Ahi to buy? (please type an interger)");
//display the total amount of ounces the user will buy
var Tamount = amount * spicyAhi.ounces;
window.alert("You are buying " + Tamount + " ounces.");
//display total price
window.alert("Your total price are " + "$" + amount*100.00);
