/*function textToAr(){
	document.getElementById("statUserInput").addEventListener(createTextNode).console.log(textToAr());
}*/

document.getElementById("statText").addEventListener("click", butClick);
document.getElementById("statUserInput").addEventListener("input",countWords);
var cWords = 0;
function countWords(){
	cWords++;
	
}

 function butClick(){
		var pLetterCount = document.createElement("P");
		var pAdd = document.createTextNode("Amount of letters inputed" + cWords);
		pLetterCount.appendChild(pAdd);
		document.body.appendChild(pLetterCount);
 }


