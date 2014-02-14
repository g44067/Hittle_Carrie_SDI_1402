// Carrie Hittle
// SDI 1402
// Project 2
// "Keeping Track"
// a "TripnDizzy Ink Production"
alert("WELCOME....to....Keeping Track");
var myConfirmation = false;
var input = email = "";

var catArray = [ "movies","music","photos"];

myConfirmation = confirm("Are you a member of Keeping Track?");
if(myConfirmation === false) {
	console.log("Feel free to check us out, or better yet start Keeping Track!");
	alert("Join us.");
	} else {
			myPrompt = prompt("Sign in please." + email);
			};
prompt("Please choose a catogorie");


while(input === catArray[1]){
	console.log("I see you have choosen to check out our movies program, great choice.")+catArray;
	if( input === catArray[2]){
		console.log("I see you have choosen to check out our music program, great choice.")+catArray;
		}else if(input === catArray[3]){
			console.log("I see you have choosen to check out our photo program, great choice.");
		};
};