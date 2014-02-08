var obj = [
	{firstName:"Ivan", lastName:"Petrov", age: 12},	
	{firstName:"Kolio", lastName:"Tenev", age: 33},		
	{firstName:"Dimitar", lastName:"Pavlov", age: 21},	
	{firstName:"John", lastName:"Locke", age: 56},	
	{firstName:"Stiliyan", lastName:"Dimitrov", age: 35},
	{firstName:"Niki", lastName:"Valkov", age: 11},
	{firstName:"Petko", lastName:"Petkov", age: 44},
	{firstName:"Dushko", lastName:"Denev", age: 41},
	{firstName:"Kaloyan", lastName:"Kaloyanov", age: 20}		
]

function getInput1() {
    findYoungestAndPrint(obj);
}

function findYoungestAndPrint(object) {
    
	var youngestPos = 0;
	
	for (var i = 0; i < object.length; i++) {

	    if (object[i].age < object[youngestPos].age) {
	        youngestPos = i;
	    }
    }
	
	document.getElementById("resultArea").value = object[youngestPos].toSource();
}