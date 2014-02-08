var arr = [];

function getInput() {
	arr = document.getElementById("Array").value;
	indexNumber = document.getElementById("inputArea").value;
	document.getElementById("resultArea").value = checkNumber(indexNumber);
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