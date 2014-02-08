function getInput() {
    
	var txtInput = document.getElementById("textArea").value;
	
	var txt = txtInput.toLowerCase();
	
	var palindromeList = [];
	
	for (var i = 0; i < txt.length; i++) {
	    
		var testPalin = [txt[i]];
		var PalFound = false;
		
		
		
		for (var j = i+1; j < (i + 20); j++) {
		    
			if (txt[j] == " " || txt[j] == "," || txt[j] == "." || txt[j] == '"') {
			    continue;
			}
			
			testPalin.push(txt[j]);
			var testPalinClone = testPalin.slice();
			
			if (testPalinClone.reverse().join('') == testPalin.join('')) {
			    palindromeList.push(testPalin);
				PalFound = true;
				break;
			}
			
		}
		
		if (PalFound) {
		    i += (testPalin.length - 1);
		}
		
	}
	
	for (var i = 0; i < palindromeList.length; i++) {
	    palindromeList[i] = palindromeList[i].join("");
	}
	
	document.getElementById("resultArea").value = palindromeList.toString();

}