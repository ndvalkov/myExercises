function getInput() {
	
		var data1  = document.getElementById('text1').value;
		var data2  = document.getElementById('text2').value;
		var data3  = document.getElementById('text3').value;
		
		var result1 = parseInt(data1);
		var result2 = parseInt(data2);
		var result3 = parseInt(data3);
		
		document.getElementById("resultArea").value = "+";
	
		if (result1 < result2) {
		    if (result2 < result3) {
		        document.getElementById("resultArea").value = result3;
		    } else if (result2 > result3) {
		        document.getElementById("resultArea").value = result2;
		    } else{
				document.getElementById("resultArea").value = result2;
			}
		} else if (result1 > result2) {
		      if (result1 < result3) {
		        document.getElementById("resultArea").value = result3;
		    } else if (result1 > result3) {
		        document.getElementById("resultArea").value = result1;
		    } else{
				document.getElementById("resultArea").value = result1;
			}
		} else{
			if (result1 < result3) {
			    document.getElementById("resultArea").value = result3;
			} else{
				if (result1 > result3) {
				    document.getElementById("resultArea").value = result1;
				} else{
					document.getElementById("resultArea").value = result1;
				}
			}
		}
		
		
}