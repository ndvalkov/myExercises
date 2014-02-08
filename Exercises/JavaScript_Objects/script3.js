var arr = [3, 4, 5, 6, 1, 11, 22, 33, 4, 6, 7, 8, 3, 23, 23];
var str = "Pesho"

function getInput1() {
	document.getElementById("resultArea").value = deepCopyObj(arr);
}

function getInput2() {
	document.getElementById("resultArea").value = deepCopyObj(str);
}


function deepCopyObj(object) {
    
	var typeObj = typeof object;
	
	function deepCopyRef() {
       
	   var clone = object.slice(0);
	   return clone;
	   
    }
   
    function deepCopyPrim() {
       var clone = object;
	   return clone;
    }
   
	switch(typeObj){
		case "number":     		
   		case "string":
		case "boolean":
		case "undefined":
		case "null": return(deepCopyPrim()); break;
		case "object": return(deepCopyRef()); break;
    }
}