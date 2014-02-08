function getInput1() {
    
	var inpt = document.getElementById("input").value;
	
	var str = inpt.toString();
	var txt = "We are living in an yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."
	
	countSubstr(str);
	
	function countSubstr(str) {
	    var strCapital = "";
		var strSmall = str.toLowerCase();
	
	    for (var i = 0; i < str.length; i++) {
	        if (i==0) {
	        	strCapital += str[0].toUpperCase();
				continue;
	    	}
			strCapital += str[i].toLowerCase();
		}
	
		var index1 = -1;
		var counter1 = -1;
	
		do {
		
			counter1++;
			index1 = txt.indexOf(strCapital, index1 + 1);
		
		}
		while(index1 != -1)
	
		var index2 = -1;
		var counter2 = -1;	
	
		do {
		
			counter2++;
			index2 = txt.indexOf(strSmall, index2 + 1);
		
		}
		while(index2 != -1)
	
		document.getElementById("resultArea").value = "The result is: " + (counter1 + counter2);
	}
	
	
	
}