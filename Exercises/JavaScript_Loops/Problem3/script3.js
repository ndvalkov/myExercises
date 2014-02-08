function getInput() {
	
	var data1  = document.getElementById('text1').value;
	
	
	var arrFirst = data1.split(" ");
	var arr = [];
	
	for (var ind in arrFirst) {
	    arr[ind] = parseFloat(arrFirst[ind]);
	}
	
	
	var minNumber = arr[0];
	var maxNumber = arr[0];
	
	for (var index in arr) {
	    if (arr[index] < minNumber) {
	        minNumber = arr[index];
	    }
		
		if (arr[index] > maxNumber) {
		    maxNumber = arr[index];
		}
	}
	
	var output = "Min number is: " + minNumber + ". Max number is: " + maxNumber;
	
	document.getElementById("resultArea").value = output;
	
}