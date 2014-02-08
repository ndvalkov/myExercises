function hide(e){
  
  e.target.parentNode.style.display = 'inline';
}









onload = function () {
	
	anchors = document.getElementsByTagName('a');
    
	for(i=0; i<anchors.length; i++) {
        document.getElementsByTagName('a')[i].addEventListener("click", hide, false);
    }

}


