function getInput1() {
    
	var inpt = document.getElementById("input").value;
	
	var str = inpt.toString();
	
	var stackArr = [];
	
	var bracsValid = true;
	
	for (var i = 0; i < str.length; i++) {
	    
		if (str[str.length - 1] == '(') {
		    bracsValid = false;
			break;
		}
		
		if (str[i] == '(' && str[i+1] == ')') {
		    bracsValid = false;
			break;
		}
		
		if (str[i] == '(') {
	        stackArr.push(str[i]);
	    }
		
		if (str[i] == ')') {
			if (stackArr.length == 0) {
			    bracsValid = false;
				break;
			} else {
				stackArr.pop(str[i]);
			}
	    }
	}
	
	
	if (stackArr.length == 0 && bracsValid == true) {
	    document.getElementById("resultArea").value = "Brackets are correct";
	} else {
		document.getElementById("resultArea").value = "Brackets are incorrect";
	}
	
}