var arr = [3, 4, 5, 6, 1, 11, 22, 33, 4, 6, 7, 8, 3, 23, 23];

function getInput() {
    var elem = document.getElementById("input").value;
	
	Array.prototype.remove = function(el) {
	    for (var i = 0; i < this.length ; i++) {
	        if (this[i] == el) {
				this.splice(i, 1);
				i--;
	        }
	    }
		
		return this;
	}
	
	var newArr = arr.remove(elem);
	document.getElementById("resultArea").value = newArr.toString();
	
	
}

