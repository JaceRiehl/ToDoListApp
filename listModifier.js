window.onload=function(){

	// Add an x beside each list element
	var myNodelist = document.getElementsByTagName("LI");
	var i;
	for (i = 0; i < myNodelist.length; i++) {
		var span = document.createElement("SPAN");
		var txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		myNodelist[i].appendChild(span);
	}
	// Allows elements to be deleted when the x is pressed
	var close = document.getElementsByClassName("close");
	for(i=0;i<close.length;i++){
		close[i].onclick = function(){
			var div = this.parentElement;
			div.style.display = 'none';
		}
	}

	// Add a check mark symbol 
	var list = document.querySelector('UL');
	list.addEventListener('click', function(ev) {
		if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
		}
	},false);
}

function addItemToList(){
	var tdList = document.createElement("li");
	var inputValue = document.getElementById("inputItem").value;
	var tNode = document.createTextNode(inputValue);
	tdList.appendChild(tNode);
	if (inputValue === '') {
	alert("Please enter something");
	} else {
	document.getElementById("toDoUl").appendChild(tdList);
	}
	document.getElementById("inputItem").value = '';

	var span = document.createElement("SPAN");
	var text = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(text);
	tdList.appendChild(span);

	//allows new elements to be disappear when x is pressed
	var close = document.getElementsByClassName('close');
	for(i=0;i<close.length;i++){
		close[i].onclick = function(){
			var div = this.parentElement;
			div.style.display = 'none';
		}
	}
}




