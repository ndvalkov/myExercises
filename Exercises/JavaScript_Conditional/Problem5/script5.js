function getInput() {
	
	var data1  = document.getElementById('text1').value;
	// var data2  = document.getElementById('text2').value;
	// var data3  = document.getElementById('text3').value;
	
	var result1 = parseInt(data1);
	// var result2 = parseInt(data2);
	// var result3 = parseInt(data3);
	
	// document.getElementById("resultArea").value = "+";
	if (result1 > 9) {
	    document.getElementById("resultArea").value = "Not a digit";
	}
	
	switch(result1) {
		
		case 1: document.getElementById("resultArea").value = "one"; break;
		case 2: document.getElementById("resultArea").value = "two";break;
		case 3: document.getElementById("resultArea").value = "three";break;
		case 4: document.getElementById("resultArea").value = "four";break;
		case 5: document.getElementById("resultArea").value = "five";break;
		case 6: document.getElementById("resultArea").value = "six";break;
		case 7: document.getElementById("resultArea").value = "seven";break;
		case 8: document.getElementById("resultArea").value = "eight";break;
		case 9: document.getElementById("resultArea").value = "nine";break;
	
	
	
	}
		
		
}