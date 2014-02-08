function getInput() {
	
	var data1 = document.getElementById("text1").value;
	// var data2 = document.getElementById("text2").value;
	
	var arr = data1.split(" ");
	// var arr2 = data2.split(" ");
	
	var sequence = [];
	sequence.push(arr[0]);
	var leng = sequence.length;
	var highestLeng = leng;
	var highestSeq = [];
	
	for (var i = 1; i < arr.length; i++) {
	    if (arr[i] == sequence[0]) {
	        sequence.push(arr[i]);
			leng++;
			
			if (leng > highestLeng) {
			    highestLeng = leng;
				highestSeq = sequence.slice(0);
			}
			
	    } else {
			sequence.length = 0;
			sequence.push(arr[i]);
			leng = 1;
		}
	}
	
	document.getElementById("resultArea").value = highestSeq;
	
}