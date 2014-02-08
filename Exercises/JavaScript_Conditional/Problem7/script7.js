function getInput() {
	
	var data1  = document.getElementById('text1').value;
	var data2  = document.getElementById('text2').value;
	var data3  = document.getElementById('text3').value;
	var data4  = document.getElementById('text4').value;
	var data5  = document.getElementById('text5').value;
	
	var a = data1;
	var b = data2;
	var c = data3;
	var d = data4;
	var e = data5;
	
	var arr = [a, b, c, d, e];
	
	var greatestNumber = Number.MIN_VALUE;
	
	for (var i = 0; i < 5; i++) {
	    
		if (((arr[i] >= a) && (arr[i] >= b) && (arr[i] >= c) && (arr[i] >= d) && (arr[i] >= e))) {
		    greatestNumber = arr[i];
		}
		
	}
	
	document.getElementById("resultArea").value = greatestNumber;
	
	
	
	
		
}