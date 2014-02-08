var arr = [4, 12, 13, 14, 23, 22, 4, 77, 77, 77, 2, 8, 91, 5, 44, 12, 12, 33, 33, 91, 2, 4, 4];

function solve() {
    var inpt = document.getElementById("inputArea").value;
	document.getElementById("resultArea").value = "There are " + countOccur(inpt, arr) + " occurrences of the number in the array.";
}

function test() {
    var inpt = document.getElementById("inputArea").value;
	document.getElementById("resultArea").value = testFunct(countOccur);
}

function countOccur(number, arr) {
    
	counter = 0;
	
	for (var i = 0; i < arr.length; i++) {
	    if (number == arr[i]) {
	        counter++;
	    }
	}
	
	return counter;
	
}

function testFunct(countFunction){
	
	var testArray = [11, 11, 2, 3, 4, 2, 3, 5, 5, 11, 5, 5];
	
	var resultFUBAR = "It's fucked up, man!";
	var resultOK = "Works fine";
	var validity = true;
	
	var number = 11;
	//tests-->
	if (countFunction(number, testArray) != 3) {
	    return resultFUBAR;
		validity = false;
	}
	
	number = 2;
	
	if (countFunction(number, testArray) != 2) {
	    return resultFUBAR;
		validity = false;
	}
	
	number = 3;
	
	if (countFunction(number, testArray) != 2) {
	    return resultFUBAR;
		validity = false;
	}
	
	number = 4;
	
	if (countFunction(number, testArray) != 1) {
	    return resultFUBAR;
		validity = false;
	}
	
	number = 5;
	
	if (countFunction(number, testArray) != 4) {
	    return resultFUBAR;
		validity = false;
	}
	
	number = 33;
	
	if (countFunction(number, testArray) != 0) {
	    return resultFUBAR;
		validity = false;
	}
	
	if (validity) {
	    return resultOK;
	}
}