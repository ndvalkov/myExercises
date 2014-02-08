function getInput() {
	
	var data1 = document.getElementById("text1").value;
	// var data2 = document.getElementById("text2").value;
	
	var arr = data1.split(" ");
	var smallestElem;
	var smallestElIndex;

	var sortedArr = [];
	
	while(!(arr.length == 0)) {
	    
		smallestElem = arr[0];
		smallestElIndex = 0;
		
		for (var i = 0; i < arr.length; i++) {
	    	
			
			
		    if ((parseInt(arr[i])) < (parseInt(smallestElem))) {
		    	smallestElem = arr[i];
				smallestElIndex = i;
			}
		
		    if (i == (arr.length - 1)) {
				sortedArr.push(arr[smallestElIndex]);
				arr.splice(smallestElIndex, 1);
			}
		}
		
	}
	
	
	
	
	
	
	document.getElementById("resultArea").value = sortedArr;
	
}