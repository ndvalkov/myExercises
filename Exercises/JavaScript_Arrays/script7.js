function sortInput() {
    
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

	document.getElementById("text2").value = sortedArr;
	
}

function getInput() {

	var data2 = document.getElementById("text2").value;
	var data3 = document.getElementById("text3").value;
	
	var selectNumber = data3;
	var arr = data2.split(",");
	var counter = parseInt(arr.length/2);
	
	var validation = true;
	
	for (var i = 0; i < arr.length ; i++) {
	    if (selectNumber == arr[i]) {
	        validation = false;
			break;
	    }
	}
	
	if (validation == true){
		document.getElementById("resultArea").value = "Invalid input";
	}
	
	while(arr.length && (validation == false)){
		
		var midIndex = parseInt(arr.length/2);
		
		if (parseInt(selectNumber) > parseInt(arr[midIndex])) {
		    
			arr.splice(0, midIndex)
			
			
			counter  = (counter + Math.floor(counter/2));
			
			continue;
		}
		
		if (parseInt(selectNumber) < parseInt(arr[midIndex])) {
		    
			if (midIndex > 1) {
			    arr.splice(midIndex, (midIndex - 1))
				counter = Math.ceil(counter/2) ;
				continue;
			} else if (midIndex = 1) {
			    arr.splice(midIndex, 1)
				counter = Math.floor(counter/2) ;
				continue;
				}
		}
		
		if (selectNumber == arr[midIndex]) {
		    
			if (counter == (-1)) {
			    document.getElementById("resultArea").value = "The index of the element is: " + (counter + 1);
				
			} else {
				document.getElementById("resultArea").value = "The index of the element is: " + counter;
				
			}
			break;
		}
		
	}
	
	
	
}