function getArray ()
{
    var toDoList = new Array;						 //create an array
	var taskstr = lacalStorage.getItem(toDoList);	 //get the task from input using lacalStorage 
	if(taskstr !== null)							//if the value is NOT empty --null--
	  {
		toDoList = JSON.parse(taskstr);
	  }
		return toDoList;
}

function addTask ()
{
	var task = document.getElementById("taskName"). value;	//create a variable to hold value of input
	var array = getArray ();					// create a variable to hold our array
	array.push(task);						// pushing the task into the array
	localStorage.setItem(array, JSON.stringify(task));					//store the task localStorage saving to the array
	show ();
	
	return false;
}

function show()
{
	var array = getArray();		//create the variable to hold Array
	var htmlFormat = "<ul>"		//Add unordered List

	for  (var i=0; i<array.length; i++)		//A For Loop to display the Array
	{
		htmlFormat += "<li>" + array[i] + "</li>";
	}
	htmlFormat += "</ul>";
	document.getElementById(array).innerHTML = htmlFormat;			//Show the document
}