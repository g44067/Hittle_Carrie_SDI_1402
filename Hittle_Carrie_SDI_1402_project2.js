// Carrie Hittle
// SDI 1402
// Project 2
// "Keeping Track"
// a "TripnDizzy Ink Production"
alert("WELCOME....to....Keeping Track");


var member = true;
var email = "";
var confirmation = confirm("Are you a member of Keeping Track?");{
	if(confirmation === true){
		prompt("Sign in please." + email);
		}else{
			console.log("Join us."); 
          alert("Feel free to check us out, or better yet start Keeping Track!");
			}
		}
var input = prompt("Please choose a catogorie",[0-3]);
var catArray = [ "movies","music","photos"];
if(input === catArray[1]){
	console.log("I see you have choosen to check out our movies program, great choice.");
	if(input === catArray[2]){
		console.log("I see you have choosen to check out our music program, great choice.");
		}else{
			console.log("I see you have choosen to check out our photo program, great choice.");
			}
		}


/*var number
var boolean


output vars

prompt for input

boolean condition

true prompt input
number conditional
math
outputA
true outputB

false prompt for input
string conditional
true outputC
false string concatenation
outputD

end*/
