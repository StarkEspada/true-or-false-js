var lineOne = document.querySelector(".line-one");
var lineTwo = document.querySelector(".line-two");
var compare = document.querySelector(".compare");
var resultCompare = document.querySelector(".result-compare");
var operator = document.querySelector(".operator")
var container = document.querySelector(".container");


	resultCompare.style.display = "none";


function clear(){
	lineOne.value = "";
	lineTwo.value = "";
	operator.value = "";
}

compare.addEventListener("click", function(){
	resultCompare.style.display = "none"
	var lineOneValue = lineOne.value;
	var lineTwoValue = lineTwo.value;
	var operatorValue = operator.value;


	if(operatorValue === "!=" || operatorValue === "!=="){
		if(lineTwoValue !== lineOneValue){
			resultCompare.style.display = "block";
			resultCompare.innerHTML = "Истина";
			resultCompare.style.color = "green";
			clear()
		}else{
			resultCompare.style.display = "block";
			resultCompare.innerHTML = "Ложь";
			resultCompare.style.color = "Red";
			clear()
		}
	}
	if(operatorValue === "===" || operatorValue === "=="){
		if(lineTwoValue === lineOneValue){
			resultCompare.style.display = "block";
			resultCompare.innerHTML = "Истина";
			resultCompare.style.color = "green";
			clear()
		} else {
			resultCompare.style.display = "block";
			resultCompare.innerHTML = "Ложь";
			resultCompare.style.color = "Red";
			clear()
		}
	}
	if(operatorValue != "==" && operatorValue != "===" && operatorValue != "!=" && operatorValue != "!=="){
		operator.style.border = 2 + "px solid red"
		compare.style.display = "none"
		var error = document.createElement("div")
		error.classList.add("error");
		container.appendChild(error)
		error.innerHTML = "Ошибка ввода условного оператора. Условные операторы: (==),(===),(!=),(!==)"

		var closeTheWindowError = document.createElement("div")
		closeTheWindowError.classList.add("close-window-error")
		error.appendChild(closeTheWindowError)
		closeTheWindowError.innerHTML = "&#215"

		closeTheWindowError.addEventListener("click", function(){
			compare.style.display = "inline-block";
			error.style.display = "none";
			operator.style.border = 2 + "px solid black"	
		})

	}
})