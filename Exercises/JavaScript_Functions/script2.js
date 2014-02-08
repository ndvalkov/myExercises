function getInput() {

	var data2 = document.getElementById("text2").value;
	
	var result = parseInt(data2);
	
	document.getElementById("resultArea").value = revDigitsOfNumber(result);
		
}


function revDigitsOfNumber(number) {
    
	var mirrorNum = " ";
	
	while(number>9){
		mirrorNum += number%10;
		number = parseInt(number/10);
	}
	
	mirrorNum += number;
	
	return mirrorNum;
}	
