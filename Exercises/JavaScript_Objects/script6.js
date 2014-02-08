var obj = [
	{firstName:"John", lastName:"Petrov", age: 56},	
	{firstName:"Denitsa", lastName:"Petrova", age: 33},		
	{firstName:"Dimitar", lastName:"Pavlov", age: 21},	
	{firstName:"John", lastName:"Locke", age: 56},	
	{firstName:"Stiliyan", lastName:"Dimitrov", age: 56},
	{firstName:"Niki", lastName:"Valkov", age: 11},
	{firstName:"Kaloyan", lastName:"Denev", age: 44},
	{firstName:"Dushko", lastName:"Denev", age: 41},
	{firstName:"Kaloyan", lastName:"Petrov", age: 20},		
	{firstName:"John", lastName:"Nedev", age: 20},	
	{firstName:"Niki", lastName:"Stanimirov", age: 20},	
	{firstName:"Todor", lastName:"Petrov", age: 20},
	{firstName:"Mariqn", lastName:"Kocev", age: 20},
	{firstName:"Stanimira", lastName:"Kaloferova", age: 21}		
]


function groupPeople(people, attribute) {
    
	var sortedByFirstName = {};
	var firstName = {};
	
	
	for (var i = 0; i < people.length; i++) {
	    
		if (sortedByFirstName[people[i].firstName]) {
			sortedByFirstName[people[i].firstName].push(people[i]);
	    }else{
			sortedByFirstName
		}
	}
	
	
	
	
	
	
}




// function groupByFirstName() {
	    
		
		
	// }
	
	// function groupBylastName() {
	    
	// }
	
	// function groupByAge() {
	    
	// }
	