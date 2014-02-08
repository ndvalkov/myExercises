function getInput() {
	
	var data1  = document.getElementById('text1').value;
	// var data2  = document.getElementById('text2').value;
	// var data3  = document.getElementById('text3').value;
	// var data4  = document.getElementById('text4').value;
	// var data5  = document.getElementById('text5').value;
	
	var a = parseInt(data1);
	// var b = parseInt(data2);
	// var c = parseInt(data3);
	// var d = parseInt(data4);
	// var e = parseInt(data5);
	
	
	var numbers0_19 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen","fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
	
	var numbers20_90 = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	
	var numbers100_900 = ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"]
	
	if ((a  > 20) && (a < 100)) {
	    
		
		document.getElementById("resultArea").value = (numbers20_90[parseInt(a/10) - 2] + " " + numbers0_19[a%10]);
	}
	
	if ((a  > 100) && (a < 1000)) {
	    
		var digit1 = parseInt(a/100);
		var digit3 = a%10;
		var digit2 = parseInt(a/10)%10;
		
		secondNumberPart = digit2*10 + digit3;
		
		document.getElementById("resultArea").value = numbers100_900[digit1 - 1] + " and " + numbers20_90[digit2 - 2] + " " + numbers0_19[a%10]; 
		
		if ((secondNumberPart >=0) && (secondNumberPart <= 19)) {
	    document.getElementById("resultArea").value = numbers100_900[digit1 - 1] + " and " + numbers0_19[secondNumberPart];
		}
		
		switch(secondNumberPart) {
		case 20: document.getElementById("resultArea").value = numbers100_900[digit1 - 1] + " and " + numbers20_90[0]; break;
		case 30: document.getElementById("resultArea").value = numbers100_900[digit1 - 1] + " and " + numbers20_90[1]; break;
		case 40: document.getElementById("resultArea").value = numbers100_900[digit1 - 1] + " and " + numbers20_90[2]; break;
		case 50: document.getElementById("resultArea").value = numbers100_900[digit1 - 1] + " and " + numbers20_90[3]; break;
		case 60: document.getElementById("resultArea").value = numbers100_900[digit1 - 1] + " and " + numbers20_90[4]; break;
		case 70: document.getElementById("resultArea").value = numbers100_900[digit1 - 1] + " and " + numbers20_90[5]; break;
		case 80: document.getElementById("resultArea").value = numbers100_900[digit1 - 1] + " and " + numbers20_90[6]; break;
		case 90: document.getElementById("resultArea").value = numbers100_900[digit1 - 1] + " and " + numbers20_90[7]; break;
		}
		
	}
	
	
	
	
	switch(a) {
		case 20: document.getElementById("resultArea").value = numbers20_90[0]; break;
		case 30: document.getElementById("resultArea").value = numbers20_90[1]; break;
		case 40: document.getElementById("resultArea").value = numbers20_90[2]; break;
		case 50: document.getElementById("resultArea").value = numbers20_90[3]; break;
		case 60: document.getElementById("resultArea").value = numbers20_90[4]; break;
		case 70: document.getElementById("resultArea").value = numbers20_90[5]; break;
		case 80: document.getElementById("resultArea").value = numbers20_90[6]; break;
		case 90: document.getElementById("resultArea").value = numbers20_90[7]; break;
	}
	
	if ((a < 0) || (a > 999) || (a%1 !== 0)) {
	    document.getElementById("resultArea").value = "Not a valid number";
	}
	
	if ((a >=0) && (a <= 19)) {
	    document.getElementById("resultArea").value = numbers0_19[a];
	}
	
}