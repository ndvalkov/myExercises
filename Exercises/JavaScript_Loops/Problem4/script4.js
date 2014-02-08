function getInput() {
	
	var doc = document;
	var win = window;
	var navi = navigator;
	
	var outputDoc = "DocProps: ";
	
	var smallestProp = "Property";
	var largestProp = "Property";
	
	
	for (var property in doc) {	     
		 if (property < smallestProp) {
		     smallestProp = property;
		 }
		 
		 if (property > largestProp) {
		     largestProp = property;
		 }
	}	
	
	for (var property in win) {	     
		 if (property < smallestProp) {
		     smallestProp = property;
		 }
		 
		 if (property > largestProp) {
		     largestProp = property;
		 }
	}	
	
	for (var property in navi) {	     
		 if (property < smallestProp) {
		     smallestProp = property;
		 }
		 
		 if (property > largestProp) {
		     largestProp = property;
		 }
	}	
	document.getElementById("resultArea").value =  "/// The smallest property is: " + smallestProp + " /// " + "/// The largest property is: " + largestProp + " ///";
}