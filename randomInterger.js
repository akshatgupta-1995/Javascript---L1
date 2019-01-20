function guess() {
	var num = document.getElementById("str").value;
		num = parseInt(num);
		if(num>0 && num<=10)
		{
			var randNum = Math.floor(Math.random() * 10) + 1;
			if(randNum == num)
			{
				alert("You Guessed It Right !!");
			} else{
				alert("Better Luck Next Time !! The Number was: "+randNum);
			}
		}
		else
		{
			alert("Enter Number between 1 to 10 only !!");
		}
}