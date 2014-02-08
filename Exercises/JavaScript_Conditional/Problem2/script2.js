function getInput() {
	
		var data1  = document.getElementById('text1').value;
		var data2  = document.getElementById('text2').value;
		var data3  = document.getElementById('text3').value;
		
		var result1 = parseInt(data1);
		var result2 = parseInt(data2);
		var result3 = parseInt(data3);
		
	
		if (result1 > 0) {
		    if ((result2 > 0) && (result3 > 0) || (result2 < 0) && (result3 < 0)) {
		        document.getElementById("resultArea").value = "+";
		    }
			
			if ((result2 < 0) && (result3 > 0) || (result2 > 0) && (result3 < 0)) {
			    document.getElementById("resultArea").value = "-";
			}
		} else if (result1 < 0) {
		     if ((result2 > 0) && (result3 > 0) || (result2 < 0) && (result3 < 0)) {
		        document.getElementById("resultArea").value = "-";
		    }
			
			if ((result2 < 0) && (result3 > 0) || (result2 > 0) && (result3 < 0)) {
			    document.getElementById("resultArea").value = "+";
			}
		}  
		
		if (result1==0 || result2==0 || result3==0) {
		    document.getElementById("resultArea").value = "0";
		}
		
		
		
		
}