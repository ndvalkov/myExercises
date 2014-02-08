

function getInput() {
    
	var txt = document.getElementById("textArea").value;
	var dd = ""
	
	var emails = extractEmails(txt);
	
	document.getElementById("resultArea").value = emails.join('\n');

	
}


function extractEmails( text ){
return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

