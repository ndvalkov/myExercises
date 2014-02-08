function getInput() {
	
	var data1 = document.getElementById("text1").value;
	var data2 = document.getElementById("text2").value;
	
	
	
	var arr = data1.split(" ");
	var arr2 = data2.split(" ");
	
	var length1 = arr.length;
	var length2 = arr2.length;
	
	if (length2 > length1) {
	    length1 = length2;
	}
	
	for (var i = 0; i <= length1; i++) {
	    if (arr[i] > arr2[i]) {
	        document.getElementById("resultArea").value = "The greater array lexicographically is Array1";
			break;
	    }
		
		if (arr[i] < arr2[i]) {
		    document.getElementById("resultArea").value = "The greater array lexicographically is Array2";
			break;
		}
		
		if(!(arr[i]) && !(arr2[i])){
			document.getElementById("resultArea").value = "Arrays are lexicographically equal";
			break;
		}
		
		if (!(arr[i])) {
		    document.getElementById("resultArea").value = "The greater array lexicographically is Array2";
			break;
		}
		
		if (!(arr2[i])) {
		    document.getElementById("resultArea").value = "The greater array lexicographically is Array1";
			break;
		}
	}
	
	
	
}