function getInput() {
	
	var data1 = document.getElementById("text1").value;
	// var data2 = document.getElementById("text2").value;
	
	var arr = data1.split(" ");
	
	var currentNum;
	var counter;

	var highestNum = Number.MIN_VALUE;
	var highestCounter = 0;
	
	for (var i = 0; i < arr.length; i++) {
			
		if (parseInt(arr[i]) == parseInt(highestNum)) {
		    continue;
		}
		
		currentNum = arr[i];
		counter = 0;
		
		for (var j = 0; j < arr.length; j++) {
		    if (parseInt(currentNum) == parseInt(arr[j])) {
		        counter++;
		    }
		}
		
		if (counter > highestCounter) {
		    highestCounter = counter;
			highestNum = currentNum;
		}
	}
	
	
	document.getElementById("resultArea").value = highestNum + "/ " + highestCounter + " /" ;
	
}