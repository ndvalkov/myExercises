var arr = [];

function getInput() {
	arr = document.getElementById("Array").value;
	document.getElementById("resultArea").value = findFirstNum(arr);
	
}

function checkNumber(indexNum) {
   
   if(indexNum < 0 || indexNum > 22){
   		return "Index out of boundaries"
   }
   
   if (!arr[indexNum--] || !arr[indexNum++]) {
       return "The element is at beginning or end, only one neighbour!"
   }
   else if ((arr[indexNum - 1] < arr[indexNum]) && (arr[indexNum + 1] < arr[indexNum])) {
		return "The element is bigger than its neighbours";			
   } else {
   	   	return "The element is not bigger than its neighbours";
   }

}

function findFirstNum(array) {
    
	
	for (var i = 0; i < array.length; i++) {
	    
		if ( checkNumber(i) == "The element is bigger than its neighbours") {
	        return "Idex " + i;
	    }
	}
	
	return "no such element"
	
	
}