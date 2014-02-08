function getInput() {

	var data2 = document.getElementById("text2").value;
	
	var result = parseInt(data2);
	
	var typeo = typeof result;
	
	if (result < 0) {
	    result*=(-1)
	}
	
	if (result < 10 ) {
	    printDigitName(result)
	} else {
		printLastDigit(result);
	}
		
}

function printLastDigit(number) {
	var dig = number%10;
	printDigitName(dig);
}

function printDigitName(digit) {
    switch(digit){
	case 0: document.getElementById("resultArea").value = "zero"; break;
	case 1: document.getElementById("resultArea").value = "one"; break;
	case 2: document.getElementById("resultArea").value = "two"; break;
	case 3: document.getElementById("resultArea").value = "three"; break;
	case 4: document.getElementById("resultArea").value = "four"; break;
	case 5: document.getElementById("resultArea").value = "five"; break;
	case 6: document.getElementById("resultArea").value = "six"; break;
	case 7: document.getElementById("resultArea").value = "seven"; break;
	case 8: document.getElementById("resultArea").value = "eight"; break;
	case 9: document.getElementById("resultArea").value = "nine"; break;
	}
}