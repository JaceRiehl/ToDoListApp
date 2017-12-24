function addItemToList(){
	var tdList = document.createElement("li");
	var inputValue = document.getElementById("inputItem").value;
	var tNode = document.createTextNode(inputValue);
	tdList.appendChild(tNode) 
	if (inputValue === '') {
    alert("Please enter something");
	} else {
    document.getElementById("toDoUl").appendChild(list);
	}
    document.getElementById("inputItem").value = '';
  
}
