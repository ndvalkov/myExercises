function getInput() {
	
	var data1  = document.getElementById('text1').value;
	var data2  = document.getElementById('text2').value;
	var data3  = document.getElementById('text3').value;
	
	var a = parseInt(data1);
	var b = parseInt(data2);
	var c = parseInt(data3);
	
	var discriminant = ((b*b) - (4*a*c));
	
	// 
	
	if (discriminant>0) {
	    
		var www = Math.sqrt(discriminant)
		
		var result1 = (-b + www) / (2*a);
		document.getElementById("resultArea").value = result1;
		
		var result2 = (-b - www) / (2*a);
		document.getElementById("resultArea2").value = result2;
	} else if (discriminant==0) {
	    
		var result3 = (-b)/2*a;
		document.getElementById("resultArea").value = result3;
	} else {
		document.getElementById("resultArea").value = "No roots";
	}
		
}