function getInput() {
	
	var arr = new Array(20);
	
	for (var i = 0; i <= 20; i++) {
	    arr[i] = i*5;
	}
	
	
	document.getElementById("resultArea").value = arr;
}