function nameInfo(){
  var firstName = document.getElementById("firstName").value;
  var middleName = document.getElementById("middleName").value;
  var lastName = document.getElementById("lastName").value;
  var fullName = firstName+' '+middleName+' '+lastName;
  document.getElementById("fullName").innerHTML = fullName;
}
























/* let myNumbers = [3,5,7,6,4,2,9];

function printEvenNumbers(numbers){
	for(var i=0;i < numbers.length;i++){
		if (numbers[i] % 2 == 0){
			console.log(numbers[i]);
		}
	}
}

printEvenNumbers (myNumbers); */
/* var btn = document.getElementById("btn");

function printUserInput(){
	var firstName = document.getElementById('firstName').value;
	var age = parseInt(document.getElementById('age').value);
	age += 2;
	console.log(firstName);
	console.log(age);
}

btn.addEventListener('click',printUserInput); */
/* 
function addStrings(string1,string2){
  return string1 + string2;
}

var fullString = addStrings("I am"," A full string!");
console.log(fullString);
 */
 
/* function numberCalculation(){
  var number1 = 5;
  var number2 = 78;
  var multiplyNumbers = number1 * number2;
  console.log(multiplyNumbers);
  if (multiplyNumbers < 2000){
    alert("I wish it was a bigger number")
  }
  else if(multiplyNumbers > 2000){
    alert("That's more like it!")
  }
}
 
 numberCalculation();
  */