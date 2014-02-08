function getInput() {
	
		var data1  = document.getElementById('text1').value;
		var data2  = document.getElementById('text2').value;
		
		var result1 = parseInt(data1);
		var result2 = parseInt(data2);
		
		
		if (result1 > result2) {
		    document.getElementById('resultArea').value = result2 + " " + result1;
		}
		else if (result1 == result2) {
			document.getElementById('resultArea').value = result1 + "=" + result2; 
		} else{
			document.getElementById('resultArea').value = result1 + " " + result2;
		}
		
		
		
		
	
		
		
		
		
}