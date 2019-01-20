function capital() {
	var str = document.getElementById("str").value;
	var arry = str.split(" ");
	var result = [];
	var x = "";
	//console.log(result);
	for(var i=0;i<arry.length;i++)
	{
		x = "";
		x = arry[i].charAt(0).toUpperCase() + arry[i].slice(1);
		result.push(x);
	}
	console.log(result.join(" "));
	document.getElementById("display").innerHTML = result.join(" ");
}