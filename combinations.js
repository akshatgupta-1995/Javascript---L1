
function combinationMaker()
{
var str = document.getElementById("str").value;
var result = [];
  for (var x = 0, y=1; x < str.length; x++,y++) 
  {
   result[x]=str.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, result.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<result.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += result[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  document.getElementById("display").innerHTML = combi;
}
