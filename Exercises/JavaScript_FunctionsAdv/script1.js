function testAppendChild(){
	var div = document.createElement("div");
	domModule.appendChild(div, "#wrapper");
}

function testRemoveChild() {
	domModule.removeChild("ul","li:first-child");
}
	

function testAddHandler() {
	domModule.addHandler("a.button", "click", function(){alert("Clicked")});
}

function testAppendToBuffer() {
	var div = document.createElement("div");
	
	domModule.appendToBuffer("container", div.cloneNode(true));
}



var domModule = (function () {
	
	var buffers = [];
	var counter = 0;
	
	function appendChild(element, selector) {
		
		var parent = document.querySelector(selector.toString());
		parent.appendChild(element);
	}
	
	function removeChild(element, selector) {
		
		var parentElem = document.getElementsByTagName(element)[0];
		var childElem = parentElem.querySelector(selector);
		childElem.parentNode.removeChild(childElem);
	}
	
	function addHandler(element, eventType, eventHandler) {
		var elem = document.querySelector(element);
		if (elem.addEventListener) {
			elem.addEventListener(eventType, eventHandler, false);
		} else {
			elem.attachEvent(eventType, eventHandler);
		}  
	}
	
	function appendToBuffer(selector, element) {
		
		var hasSelector = false;
		
		for (var i = 0; i < buffers.length; i++) {
			
			if (buffers[i].parent == selector) {
				buffers[i].children.appendChild(element);
				hasSelector = true;
				break;
			}
		
		}
		
		if (!hasSelector) {
			var frag = document.createDocumentFragment();
			frag.appendChild(element);
			var obj = {parent: selector, children: frag};
			buffers.push(obj);
		}
		
		counter++;
		
		if (counter == 3) {
			
			for (var i = 0; i < buffers.length; i++) {
				
				var parentElement = document.querySelector("#" + buffers[i].parent);
				parentElement.appendChild(buffers[i].children);
			}
			counter = 0;
		}
	}
	
	return {
        appendChild: appendChild,
		removeChild: removeChild,
        addHandler: addHandler,
        appendToBuffer: appendToBuffer
    };
	
}());
