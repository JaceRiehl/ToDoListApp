
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	document.body.style.backgroundColor = "red";
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
},false);


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
}





